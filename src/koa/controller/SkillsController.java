package koa.controller;

import javafx.fxml.FXML;
import koa.helpers.JsonHelper;
import koa.model.skills.*;

public class SkillsController {
	private Skills skills;
	private static final String ALCHEMY_MODEL_FILE = "html/json/skills.json";
	
	@FXML
	private void initialize() {
		skills = new Skills();		
		skills = (Skills) JsonHelper.parseJsonModelFromFile(ALCHEMY_MODEL_FILE, skills, Skills.class);
	}	
}
