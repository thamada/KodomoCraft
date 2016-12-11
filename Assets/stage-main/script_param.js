#pragma strict
  
var style :GUIStyle;
var windowRect : Rect = Rect (20, 20, 300, 200);
 
function OnGUI() {

	windowRect = GUI.Window (0, windowRect, DoMyWindow, "Console");

}

function DoMyWindow (windowID : int) {



	GUI.Label(Rect(10, 0,  200, 20), "Usage:", style);
    GUI.Label(Rect(10, 20, 200, 20), "w,a,s,d: go/rot", style);
    GUI.Label(Rect(10, 40, 200, 20), "Space: jump", style);
    GUI.Label(Rect(10, 60, 200, 20), "Escape: exit", style);

   	if(GUI.Button (Rect (10,80,100,20), "Quit")){
		Application.Quit();
	}

	if (Input.GetKey(KeyCode.Escape)) {
		Application.Quit();
	}

    

	GUI.DragWindow (Rect (0,0, 10000, 20));
}

