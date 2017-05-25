package application;
	
import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
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
			
			primaryStage.setMinWidth(1150);
			primaryStage.setMinHeight(600);
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
