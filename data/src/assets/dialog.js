function receiver(event) {
	var elem = document.getElementById('gdwr-placeHolder');

	var command = event.data.split(':')[0];
	var data = event.data.substr(command.length+1);

	if (command === 'content') {
		elem.innerHTML = data;

		return;
	}

	if (command === 'voice') {
		$rw_setVoice(data);

		return;
	}

	if (command === 'speed') {
		$rw_setSpeedValue(parseInt(data));

		return;
	}
	
	if (command === 'clear') {
		elem.innerHTML = '';

		return;
	}
	
	if (command === 'stop') {
		$rw_event_stop();

		return;
	}

}
window.addEventListener('message', receiver, false);	

function startedSpeech() {
	alert('speech started');
}

try{
	//+++ User customizable parameters start here. +++ 
	eba_client_version = '160';
	eba_server_version = 'ToolbarRW';
	eba_icons = 0;
	eba_server='khlcpnnojomfljfplojjgafklknofead';
	eba_speech_server='rsccontrol05.speechstream.net';
	eba_login_name='rwforgdocs';
	eba_speed_value=40;
	eba_voice_from_lang_flag= true;
	eba_initial_speech_on = true;
	eba_continuous_reading = true;
	eba_speech_started_callback = startedSpeech;
    //+++ End of user customizable parameters section. +++
	$rw_barInit(); 
}
catch(err){}