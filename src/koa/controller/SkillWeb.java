package koa.controller;

import java.io.File;
import java.net.MalformedURLException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.web.WebView;
import javafx.stage.Modality;
import javafx.stage.Stage;

public class SkillWeb {
	@FXML 
	private WebView webViewSkills;
	@FXML
	private WebView webViewAbilities;
	
	@FXML
	public void initialize() throws MalformedURLException {
		String urlSkills = new File("html/skills.html").toURI().toURL().toExternalForm();
		String urlAbilities = new File("html/abilities.html").toURI().toURL().toExternalForm();

		webViewSkills.getEngine().load(urlSkills);
		webViewAbilities.getEngine().load(urlAbilities);		
	}
	
	public void showAbout(ActionEvent e) {
		try {
            FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/koa/views/about.fxml"));
            Parent root1 = (Parent) fxmlLoader.load();
            Stage stage = new Stage();
            root1.getStylesheets().add(getClass().getResource("/koa/style/application.css").toExternalForm());
            
            String path = new File("html/img/amalur.jpg").toURI().toURL().toExternalForm();
            
            stage.getIcons().add(new Image(path));
            stage.initModality(Modality.APPLICATION_MODAL);
            stage.setMinWidth(600);
            stage.setMaxWidth(600);
            stage.setMinHeight(300);
            stage.setMaxHeight(300);
            stage.setTitle("About programm");
            stage.setScene(new Scene(root1));  
            stage.show();
          } catch (Exception ex) {

          }
	}	
}
