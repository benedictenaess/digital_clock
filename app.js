
function StudentAverage (math, history, biology, geography) {
	this.math = math,
	this.history = history,
	this.biology = biology,
	this.geography = geography,
	this.getAverage = () => {
		console.log((this.math + this.history + this.biology + this.geography) / 4);
	}
}

const student1 = new StudentAverage(65, 80, 75, 80);
student1.getAverage(); // Result is 75
