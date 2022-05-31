export const questions = [
	{
		id: 1,
		text: "What sports do you do?",
		type: "multiple",
		dataType: "sport",
		answers: [
			{ text: "Golf" },
			{ text: "Tennis" },
			{ text: "Football" },
			{ text: "Hockey" },
			{ text: "Basketball" },
			{ text: "Baseball" },
			{ text: "Bodybuilding" },
			{ text: "Running" },
			{ text: "Cycling" },
			{ text: "Other" },
		]
	},
	{
		id: 2,
		text: "How old are you?",
		type: "primary",
		dataType: "age",
		answers: [
			{
				text: "I’m in my 20s",
				value: 20
			},
			{
				text: "I’m in my 30s",
				value: 30
			},
			{
				text: "I’m in my 40s",
				value: 40
			},
			{
				text: "I’m in my 50s",
				value: 50
			},
			{
				text: "I’m in my 60s",
				value: 60
			},
			{
				text: "I’m in my 70s",
				value: 70
			},
		]
	},
	{
		id: 3,
		text: "What is your current fitness level?",
		type: "primary",
		dataType: "fitnessLevel",
		answers: [
			{ text: "Beginner", value: "Beginner" },
			{ text: "Intermediate", value: "Intermediate" },
			{ text: "Professional", value: "Professional" },
		]
	},
	{
		id: 4,
		text: "Did you know?",
		type: "info",
		dataType: "sport",
		answers: [
			{ text: "Trauma Tape helps to improve circulation, support muscles, allow the internal injury to heal, and help prevent further sprains, muscle strains, subluxations, and tendonitis while still allowing motion." },
		]
	},
	{
		id: 5,
		text: "What kind of workouts do you prefer?",
		type: "primary",
		dataType: "workoutPreference",
		answers: [
			{ text: "Light", value: "light" },
			{ text: "Moderate", value: "moderate" },
			{ text: "Intense", value: "intense" },
		]
	},
	{
		id: 6,
		text: "How often do you usually exercise?",
		type: "primary",
		dataType: "exerciseFrequency",
		answers: [
			{ text: "Everyday", value: "everyday" },
			{ text: "Three times a week", value: "three times a week" },
			{ text: "Once a week", value: "once a week" },
			{ text: "Twice a month", value: "twice a month" },
			{ text: "Three times a month", value: "three times a month" },
			{ text: "Once a month", value: "once a month" },
		]
	},
	{
		id: 7,
		text: "What is your current health state?",
		type: "primary",
		dataType: "currentHealthState",
		answers: [
			{ text: "I recently got injured", value: "recently got injured" },
			{ text: "I have a minor injury", value: "have a minor injury" },
			{ text: "I have a chronic injury", value: "have a chronic injury" },
			{ text: "I am recovering from an injury", value: "are recovering from an injury" },
		]
	},
	{
		id: 8,
		text: "Which part of your body was injured?",
		type: "multiple",
		dataType: "bodyPart",
		answers: [
			{ text :"Ankle" },
			{ text :"Calve" },
			{ text :"Knee" },
			{ text :"Abdomen" },
			{ text :"Lower back" },
			{ text :"Elbow" },
			{ text :"Shoulder" },
			{ text :"Upper back" },
			{ text: "Neck" },
			{ text: "Other" },
		]
	},
	{
		id: 9,
		text: "Did you know?",
		type: "info",
		dataType: "bodyPart",
		answers: [
			{ text: "Trauma Tape gently allows the free flow of blood and lymphatic fluid to cleanse and heal the inflammation without the use of medications or surgery." },
		]
	},
]
