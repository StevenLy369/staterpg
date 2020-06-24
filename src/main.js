import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { stateChanger, changeStateString, changeState, stateChangerNpc } from './character.js';

//functions here: battle? level?

const damage = Math.floor(Math.random() * 25) - 25;
// const battle = changeState('health');
//player health goes down
const highDmg = changeState('health')(damage);

$(document).ready(function() {
	$('#form').submit(function(event) {
		event.preventDefault();
		let name = $('#name').val();
		const addPlayer = changeStateString('name')(name);
		const newState = stateChanger(addPlayer);
		$('#name-value').text(newState.name);
		$('#health-value').text(newState.health);
		$('#strength-value').text(newState.strength);
		$('#dexterity-value').text(newState.dexterity);
		$('#intelligience-value').text(newState.intelligience);

		const newNpc = stateChangerNpc();
		$('#npc-name-value').text(newNpc.name);
		$('#npc-health-value').text(newNpc.health);
		$('#npc-strength-value').text(newNpc.strength);
		$('#npc-dexterity-value').text(newNpc.dexterity);
		$('#npc-intelligience-value').text(newNpc.intelligience);

		console.log('button works');
	});

	$('#battle').click(function() {
		const newState = stateChanger(highDmg);
		if (newState.health <= 0) {
			newState.health = 0;
		}
		$('#health-value').text(newState.health);
	});
});
