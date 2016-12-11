#pragma strict
  
var style :GUIStyle;
var windowRect : Rect = Rect (20, 20, 300, 200);
 
function OnGUI() {

	windowRect = GUI.Window (0, windowRect, DoMyWindow, "Console");

}

function DoMyWindow (windowID : int) {

	if(GUI.Button (Rect (10,20,100,20), "Quit")){
//		Debug.Log("Hit!!");
		Application.Quit();
	}

	if (Input.GetKey(KeyCode.Escape)) {
		Application.Quit();
	}

	GUI.DragWindow (Rect (0,0, 10000, 20));
}

