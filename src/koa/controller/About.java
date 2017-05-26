package koa.controller;


import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class About {
	@FXML
	private Label aboutText;
	@FXML
	private Label contactText;
	@FXML
	private Label tackedFrom;
	
	private static final String ABOUT_MAIN_TEXT = "Hello guys! When i have began play this game(Kingdom of Amalur) i coud't find working talant calculator. All links that i finded was broken. And this is the main reason for wrating this calculator. I hope it will be usfull.";
	private static final String CONTACT_TEXT = "If you have questions or you find bug, or just want say \"thaks\", you are wellcome: ";
	private static final String TACKED_FROM = "All skills and abilities descriptions taked from this site: ";

	@FXML
	public void initialize() {
		aboutText.setText(ABOUT_MAIN_TEXT);
		contactText.setText(CONTACT_TEXT);
		tackedFrom.setText(TACKED_FROM);
	}	
}
