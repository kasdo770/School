import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
    grade: String,
    class: mongoose.SchemaTypes.ObjectId,
    quizzes: [{
        subject: String,
        mark: String,
        date: String
    }],
    absent: [{
        date: String,
        teacher: String,
    }],
    warnings: Number,
    Edusystem: String,
    Division: String,
});

studentSchema.methods.warnings = function () {
    if (self.absent.length >= 30) {
        self.warnings = self.warnings + 1;
    }
    return {
        absent: this.absent.length,
        warnings: this.warnings.length
    }
}


module.exports = mongoose.models.Student || mongoose.model("Student", studentSchema)