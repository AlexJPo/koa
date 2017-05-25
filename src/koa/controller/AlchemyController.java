package koa.controller;

import javafx.geometry.Rectangle2D;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import koa.model.*;

public class AlchemyController {
	public Receip receips;
	private ObservableList<Potion> personData;
	private List<Potion> currentPotionType;
	
	private static final String ALCHEMY_MODEL_FILE = "html/alchemy.json";
	
	@FXML
	private TableView<Potion> tableView;
	@FXML
	private TableColumn<Potion, String> potionName;
	@FXML
	private TableColumn<Potion, String> potionEffect;
	
	@FXML
	private Label minorPotion;
	@FXML
	private Label greatPotion;
	@FXML
	private Label masterPotion;
	
	@FXML
	private HBox reagentsList;
	
	@FXML
	private void initialize() {
		receips = new Receip();
		
		parseJsonModelFromFile(ALCHEMY_MODEL_FILE);
		
		currentPotionType = receips.getMinor();		
		personData = FXCollections.observableArrayList(currentPotionType);
		
		setTableData();			
		setCustomProperties();
	}
	
	private void parseJsonModelFromFile(String filePath) {
		Reader reader;

		try {
			reader = new InputStreamReader(new FileInputStream(filePath), "UTF-8");
			
			Gson gson = new GsonBuilder().create();			
			receips = gson.fromJson(reader, Receip.class);			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private void setTableData() {
		potionName.setCellValueFactory(new PropertyValueFactory<Potion, String>("name"));
		potionEffect.setCellValueFactory(new PropertyValueFactory<Potion, String>("effect"));
		
		tableView.getSelectionModel().selectedItemProperty().addListener((observable, oldValue, newValue) -> {
		    if (newValue != null) {
		    	List<Reagent> reagets = newValue.getPotion();
		    	
		    	if (reagentsList.getChildren().size() > 1) {
		    		reagentsList.getChildren().remove(1, reagentsList.getChildren().size());		    		
		    	}		    	
		    	
		    	for (Reagent reagent : reagets) {
		    		AnchorPane anchorPane = new AnchorPane();
			    	HBox.setHgrow(anchorPane, Priority.ALWAYS);
			    	
			    	String urlImage = "";
			    	try {
						urlImage = new File("html/" + reagent.getImagePath()).toURI().toURL().toExternalForm();
					} catch (Exception e) {
						e.printStackTrace();
					}
			    	
			    	ImageView imageView = createImageView(urlImage);
			    	Label countLabel = createReagentCountLabel(reagent.getReagentCount());			    				    	
			    	Label reagentNameLabel = createReagentNameLabel(reagent.getReagentName());

			    	anchorPane.getChildren().add(imageView);
			    	anchorPane.getChildren().add(countLabel);
			    	anchorPane.getChildren().add(reagentNameLabel);
			    	
			    	reagentsList.getChildren().add(anchorPane);
				}
		    }
		});
		
		tableView.setItems(personData);
	}
	
	private ImageView createImageView(String imagePath) {
		ImageView imageView = new ImageView();
		
		imageView.setPreserveRatio(true);
    	imageView.setViewport(new Rectangle2D(0, 0, 55, 55));
    	imageView.setPickOnBounds(true);			    				    	
    	imageView.setImage(new Image(imagePath));
    	
    	AnchorPane.setTopAnchor(imageView, 0.0);
    	AnchorPane.setBottomAnchor(imageView, 0.0);
    	AnchorPane.setLeftAnchor(imageView, 0.0);
		
		return imageView;
	}
	
	private Label createReagentCountLabel(int count) {
		Label label = new Label();
		
		label.setText("x" + String.valueOf(count));
		label.setFont(new Font("System Bold", 20.0));
		label.setTextFill(Color.web("#f0ecf0"));
		
    	AnchorPane.setBottomAnchor(label, 0.0);
    	AnchorPane.setLeftAnchor(label, 30.0);
    	
    	return label;
	}
	
	private Label createReagentNameLabel(String name) {
		Label label = new Label();
		
		label.setText(name);
		label.setFont(new Font("Arial Bold", 20.0));
		label.setTextFill(Color.web("#f0ecf0"));
		
    	AnchorPane.setBottomAnchor(label, 0.0);
    	AnchorPane.setTopAnchor(label, 0.0);
    	AnchorPane.setLeftAnchor(label, 60.0);
    	AnchorPane.setRightAnchor(label, 0.0);
    	
    	return label;
	}
	
	private void setCustomProperties() {		
		minorPotion.getProperties().put("potionType", "minor");
		greatPotion.getProperties().put("potionType", "great");
		masterPotion.getProperties().put("potionType", "master");		
	}
	
	public ObservableList<Potion> getPersonData() {
        return personData;
    }
		
	private void removePotionTypeClass() {
		minorPotion.getStyleClass().remove("potion-type-active");
		greatPotion.getStyleClass().remove("potion-type-active");
		masterPotion.getStyleClass().remove("potion-type-active");
	} 
	public void changePotionType(MouseEvent e) {
		Label selectedLabel = (Label)e.getSource();
		String potionType = selectedLabel.getProperties().get("potionType").toString(); 
		
		removePotionTypeClass();
		selectedLabel.getStyleClass().add("potion-type-active");
		
		switch(potionType) {
			case "minor":
				personData.removeAll(currentPotionType);
				currentPotionType = receips.getMinor();
				personData.addAll(currentPotionType);
				break;
			case "great":
				personData.removeAll(currentPotionType);
				currentPotionType = receips.getGreater();
				personData.addAll(currentPotionType);
				break;
			case "master":
				personData.removeAll(currentPotionType);
				currentPotionType = receips.getMaster();
				personData.addAll(currentPotionType);
				break;
		}		
	}
	
}
