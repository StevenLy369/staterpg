import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { stateChanger, changeState } from './character.js';

//functions here: battle? level?
const giveNameP = changeState('name');
const giveHealthP = changeState('health');
const giveStrengthP = changeState('strength');
const giveDexterityP = changeState('dexterity');
const giveIntelligienceP = changeState('intelligience');
$(document).ready(function() {
	$('#form').submit(function(event) {
		event.preventDefault();

		// Name Input
		var name = $('#p-name').val();
		const addName = giveNameP(name);
		const newGameName = stateChanger(addName);

		// Strength Input
		var str = $('#p-strength').val();
		const addStr = giveStrengthP(str);
		const newGameStr = stateChanger(addStr);

		// Dexterity Input
		var dext = $('#p-dexterity').val();
		const addDext = giveDexterityP(dext);
		const newGameDext = stateChanger(addDext);

		// Intelligience Input
		var intel = $('#p-intelligience').val();
		const addIntel = giveIntelligienceP(intel);
		const newGameIntel = stateChanger(addIntel);

		const newGameHealth = stateChanger(giveHealthP(50));

		$('#name-value').text(newGameName.name);

		$('#health-value').text(newGameHealth.health);
		$('#strength-value').text(newGameStr.strength);
		$('#dexterity-value').text(newGameDext.dexterity);
		$('#intelligience-value').text(newGameIntel.intelligience);

		console.log('button works');
		$('#player').show();
		$('#form').hide();
	});

	// $('#battle').click(function() {
	// 	const newState = stateChanger(highDmg);
	// 	if (newState.health <= 0) {
	// 		newState.health = 0;
	// 	}
	// 	$('#health-value').text(newState.health);
	// });

	$('#fight').click(function() {
		$('body').load('./battle.html');
		console.log('help');
	});
});
