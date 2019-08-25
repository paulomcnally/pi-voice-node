const mqtt = require('mqtt');
const config = require('./config');
const intents = require('./intents');

const hostname = process.env.MQTT_HOST || "mqtt://localhost";
const client  = mqtt.connect(hostname);

client.on('connect', function () {
  console.log("[Snips Log] Connected to MQTT broker " + hostname);
  client.subscribe('hermes/#');
});

client.on('message', (topic, message) => {
  if (topic === "hermes/asr/startListening") {
    onListeningStateChanged(true);
  } else if (topic === "hermes/asr/stopListening") {
    onListeningStateChanged(false);
  } else if (topic.match(/hermes\/hotword\/.+\/detected/g) !== null) {
    onHotwordDetected()
  } else if (topic.match(/hermes\/intent\/.+/g) !== null) {
    onIntentDetected(JSON.parse(message));
  }
});

const onIntentDetected = (intent) => {
  const intentName = intent.intent.intentName.replace(`${config.snips.username}:`, '');
  intents[intentName].action(intent.slots);
  console.log("[Snips Log] Intent detected: " + JSON.stringify(intent));
}

const onHotwordDetected = () => {
  console.log("[Snips Log] Hotword detected");
}

const onListeningStateChanged = (listening) => {
  console.log("[Snips Log] " + (listening ? "Start" : "Stop") + " listening");
}
