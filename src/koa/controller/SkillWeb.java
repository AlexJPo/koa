package koa.controller;

import java.io.File;
import java.net.MalformedURLException;

import javafx.fxml.FXML;
import javafx.scene.web.WebView;

public class SkillWeb {
	@FXML 
	private WebView webViewSkills;
	@FXML
	private WebView webViewAbilities;
	
	@FXML
	public void initialize() throws MalformedURLException {
		String html = "koa/views/html/skills.html";
		//String url = SkillWeb.class.getResource("/koa/views/html/skills.html").toString();
		String urlSkills = new File("html/skills.html").toURI().toURL().toExternalForm();
		String urlAbilities = new File("html/abilities.html").toURI().toURL().toExternalForm();

		webViewSkills.getEngine().load(urlSkills);
		webViewAbilities.getEngine().load(urlAbilities);
	}
}
