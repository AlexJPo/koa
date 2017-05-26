package application;
	
import java.io.File;

import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.fxml.FXMLLoader;

public class Main extends Application {
	@Override
	public void start(Stage primaryStage) {
		try {			
			FXMLLoader fxmlLoader = new FXMLLoader();
			fxmlLoader.setLocation(getClass().getResource("/koa/views/skillWeb.fxml"));
			Parent mainWindow = fxmlLoader.load();
			
			Scene scene = new Scene(mainWindow, 400, 400);
			scene.getStylesheets().add(getClass().getResource("/koa/style/application.css").toExternalForm());
			
			String path = new File("html/img/amalur.jpg").toURI().toURL().toExternalForm();
			
			primaryStage.setTitle("KOA:Reckoning - abilities and skills calculator");
			primaryStage.getIcons().add(new Image(path));
			primaryStage.setMinWidth(1150);
			primaryStage.setMinHeight(700);
			primaryStage.setScene(scene);
			primaryStage.show();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		launch(args);
	}
}
