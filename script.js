var createPolitician = function(politicianName, partyColor) {
var politician = {};
politician.name = politicianName;
politician.totalVotes = 0;
politician.electionResults = null;
politician.partyColor = partyColor;
politician.tallyVotes = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
    console.log(this.totalVotes);
  }
};
return politician;
};

var winner = "???";
var hamilton = createPolitician("Alexander Hamilton", [132, 17, 11]);
var burr = createPolitician("Aaron Burr", [245, 141, 136]);

hamilton.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
burr.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

hamilton.electionResults[9] = 1;
burr.electionResults[9] = 28;

hamilton.electionResults[4] = 17;
burr.electionResults[4] = 38;

hamilton.electionResults[43] = 11;
burr.electionResults[43] = 27;

console.log(hamilton.electionResults);
console.log(burr.electionResults);

var setStateResults = function(state) {
	theStates[state].winner = null;
	if (hamilton.electionResults[state] > burr.electionResults[state]) {
	theStates[state].winner = hamilton;
	}
	else if (hamilton.electionResults[state] < burr.electionResults[state]) {
		theStates[state].winner = burr;
	}
	var stateWinner = theStates[state].winner;
	if (stateWinner !== null) {
		theStates[state].rgbColor = stateWinner.partyColor;
	} else {
		theStates[state].rgbColor = [11, 32, 57];
	}
	var stateTable = document.getElementById("stateResults");
var stateTableHeader = stateTable.children[0].children[0];
var stateName = stateTableHeader.children[0];
stateName.innerText = theStates[state].nameFull;
var stateAbbrev = stateTableHeader.children[1];
stateAbbrev.innerText = theStates[state].nameAbbrev;
var stateTableRow1 = stateTable.children[1].children[0];
var candidate1Name = stateTableRow1.children[0];
candidate1Name.innerText = hamilton.name;
var candidate1Results = stateTableRow1.children[1];
candidate1Results.innerText = hamilton.electionResults[state];
var stateTableRow2 = stateTable.children[1].children[1];
var candidate2Name = stateTableRow2.children[0];
candidate2Name.innerText = burr.name;
var candidate2Results = stateTableRow2.children[1];
  candidate2Results.innerText = burr.electionResults[state];
var stateTableRow3 = stateTable.children[1].children[2];
var winnerName = stateTableRow3.children[1];

if (theStates[state].winner === null) {
  winnerName.innerText = "DRAW";
} else {
  winnerName.innerText = theStates[state].winner.name;
}
}
hamilton.tallyVotes();
burr.tallyVotes();

console.log(hamilton.totalVotes);
console.log(burr.totalVotes);

if (hamilton.totalVotes > burr.totalVotes) {
  winner = hamilton.name;
}
else if (hamilton.totalVotes < burr.totalVotes) {
  winner = burr.name;
}
else {
  winner = "...It's a draw";
};

console.log("And the winner is " + winner + "!!!");

var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];
row.children[0].innerText = hamilton.name;
row.children[1].innerText = hamilton.totalVotes;
row.children[2].innerText = burr.name;
row.children[3].innerText = burr.totalVotes;
row.children[5].innerText = winner;
