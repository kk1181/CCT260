let visited = {butler: false, maid: false};
let cluesChecked = {clue1: false, clue2: false, clue3: false, clue4: false};

document.getElementById('butlerDoor').onclick = function() {
	visited.butler = true;
	showButlerRoom();
};

document.getElementById('maidDoor').onclick = function() {
	visited.maid = true;
	showMaidRoom();
};

function showButlerRoom(){

document.getElementById('doorScene').style.display = 'none';
document.getElementById('clueScene').style.display = 'flex';

document.getElementById('clue1').style.display = 'flex';
document.getElementById('clue2').style.display = 'flex';

document.getElementById('desc').innerText = 'The butler’s room is meticulously organized, with several thick books neatly arranged on the shelf and a spotless desk. The air carries a faint trace of his usual cologne, mingling with the subtle scent of aged paper. The window is slightly ajar, and the night breeze gently rustles the curtains, adding to the quiet ambiance.'

}

function showMaidRoom(){
document.getElementById('doorScene').style.display = 'none';
document.getElementById('clueScene').style.display = 'flex';

document.getElementById('clue3').style.display = 'flex';
document.getElementById('clue4').style.display = 'flex';

document.getElementById('desc').innerText = 'The maid’s room is modestly furnished, with a neatly made bed and a carefully folded blanket. A few sewing threads and fabric scraps rest on the table, while a recently used shopping basket sits in the corner, still carrying the faint scent of fresh vegetables.'

}

const clues = {
	clue1: 'The desk drawer is slightly ajar, revealing neatly stacked documents and account books, with a folded letter buried at the bottom.'
	clue2: 'Unfolding the letter reveals a debt note signed by the master, with a massive sum owed and a date just before the ruby was stolen.'
	clue3: 'At the bottom of the shopping basket lies a letter, its edges slightly creased, suggesting it was placed there in a hurry.'
	clue4: 'The letter reveals that the master has been contacting an antique dealer, planning to sell the ruby to settle his debts. Since the maid frequently goes out to buy groceries, the master may have used her to deliver the letter discreetly.'

}

document.querySelectorAll('.clue').forEach(clue => {
	clue.onclick = function(){
		const id = this.id;
		cluesChecked[id] = true;
		document.getElementById('desc').innerText = clues[id];
		checkAllClues();
	};
});


function checkAllClues(){
	const allVisited = Object.values(visited).every(v => v);
	const allCluesChecked = Object.values(cluesChecked).every(v => v);

	if (allVisited && allCluesChecked){
		document.getElementById('transition').style.display = 'block';
		document.getElementById('nextScene').onclick = function() {
			location.href = 'scene4.html';
		};
	}
}
