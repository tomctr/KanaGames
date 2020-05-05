export default class Result {
    constructor(totalErrors, examLength, errorList) {
        this.totalErrors = totalErrors;
        this.examLength = examLength;
        this.errorList = errorList;
    }

    getSuccessRate() {
        return Math.floor((this.totalErrors / this.examLength) * 100);
    }

    getScore(){
        return this.examLength - this.totalErrors;
    }
}