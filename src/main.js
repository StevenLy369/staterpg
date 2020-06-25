import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { stateChanger, changeState, stateChangerNpc } from './character.js';

//functions here: battle? level?
const giveNameP = changeState('name');
const giveHealthP = changeState('health');
const giveStrengthP = changeState('strength');
const giveDexterityP = changeState('dexterity');
const giveIntelligienceP = changeState('intelligience');

const giveNameNpc = changeState('name');
const giveHealthNpc = changeState('health');
const giveStrengthNpc = changeState('strength');
const giveDexterityNpc = changeState('dexterity');
const giveIntelligienceNpc = changeState('intelligience');

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

		const newGameHealth = stateChanger(giveHealthP(100));

		$('#name-value').text(newGameName.name);

		$('#health-value').text(newGameHealth.health);
		$('#strength-value').text(newGameStr.strength);
		$('#dexterity-value').text(newGameDext.dexterity);
		$('#intelligience-value').text(newGameIntel.intelligience);

		console.log('button works');
		$('#player').show();
		$('#form').hide();
	});

	$('#battle').click(function() {
		$('#npc').show();
		$('#battle').hide();
		$('#npc-name-value').text;

		var npcName = 'Bobby';
		const addNpcName = giveNameNpc(npcName);
		const newNpcName = stateChangerNpc(addNpcName);

		var npcHealth = 300;
		const addNpcHealth = giveHealthNpc(npcHealth);
		const newNpcHealth = stateChangerNpc(addNpcHealth);

		var npcStr = 50;
		const addNpcStr = giveStrengthNpc(npcStr);
		const newNpcStr = stateChangerNpc(addNpcStr);

		var npcDex = 35;
		const addNpcDex = giveDexterityNpc(npcDex);
		const newNpcDex = stateChangerNpc(addNpcDex);

		var npcIntelligience = 1;
		const addNpcInt = giveIntelligienceNpc(npcIntelligience);
		const newNpcInt = stateChangerNpc(addNpcInt);

		$('#npc-name-value').text(newNpcName.name);
		$('#npc-health-value').text(newNpcHealth.health);
		$('#npc-strength-value').text(newNpcStr.strength);
		$('#npc-dexterity-value').text(newNpcDex.dexterity);
		$('#npc-intelligience-value').text(newNpcInt.intelligience);
	});
});
