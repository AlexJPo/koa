package koa.controller;

import javafx.fxml.FXML;
import javafx.scene.Node;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Pane;

public class SampleController {

	@FXML
	private GridPane skillGridChild;
	
	@FXML
	public void paneClick(MouseEvent event) {
		Pane target = (Pane) event.getTarget();
		
		System.out.println(target);
	}
	
	@FXML
	private void initialize() {		
		for (Node node : skillGridChild.getChildren()) {
		    node.setOnMouseEntered(e -> skillGridChild.getChildren().forEach(c -> {
		        Integer targetIndex = GridPane.getRowIndex(node);
		        
		        if (GridPane.getRowIndex(c) != null) {
		        	if (GridPane.getRowIndex(c) == targetIndex && GridPane.getRowIndex(c) > 1) {
			            c.setStyle("-fx-background-color: rgb(100, 100, 100);");
			        }		        	
		        }		        
		    }));
		    node.setOnMouseExited(e -> skillGridChild.getChildren().forEach(c -> {
		        Integer targetIndex = GridPane.getRowIndex(node);
		        
		        if (GridPane.getRowIndex(c) != null) {
		        	if (GridPane.getRowIndex(c) == targetIndex && GridPane.getRowIndex(c) > 1) {
			            c.setStyle("-fx-background-color: none;");
			        }
		        }
		    }));
		}		
	}
	
	@FXML
	public void test(MouseEvent event) {
		Node target = (Node) event.getTarget();
		Integer rowIndex =  skillGridChild.getRowIndex(target);
		
		/*System.out.println(rowIndex);*/
		
		 //RowConstraints row = skillGridChild.getRowConstraints().get(rowIndex);
		
		for (Node node : skillGridChild.getChildren()) {
			Integer row = skillGridChild.getRowIndex(node);
			Integer col = skillGridChild.getColumnIndex(node);
			
			if (row != null && col != null) {
		        if (row == 2 && col == 1) {
		        	node.setStyle("-fx-background-color: rgb(200,200,200);");
		        	System.out.println(node.getClass());
		            break;
		        }
			}
	    }
				
		/*for (Node node : skillGridChild.getChildren()) {
			Integer targetIndex = GridPane.getColumnIndex(node);
			Integer rowIndex = GridPane.getRowIndex(node);
			
			Integer
			
	        if (GridPane.getColumnIndex(node) == targetIndex && GridPane.getRowIndex(node) == rowIndex) {
	            node.setStyle("-fx-background-color:#f9f3c5;");
	        }
	    }*/
			
		
		
		/*
		for (Node node : skillGridChild.getChildren()) {
			Integer targetIndex = GridPane.getColumnIndex(node);
			Integer rowIndex = GridPane.getRowIndex(node);
	        if (GridPane.getColumnIndex(node) == targetIndex && GridPane.getRowIndex(node) == rowIndex) {
	            node.setStyle("-fx-background-color:#f9f3c5;");
	        }
	    }*/
			
		//skillGridChild.getRowConstraints();
		/*for (Node node : skillGridChild.getChildren()) {
		    node.setOnMouseEntered(e -> skillGridChild.getChildren().forEach(c -> {
		        Integer targetIndex = GridPane.getColumnIndex(node);
		        if (GridPane.getColumnIndex(c) == targetIndex) {
		            c.setStyle("-fx-background-color:#f9f3c5;");
		        }
		    }));
		    node.setOnMouseExited(e -> officeHoursGridPane.getChildren().forEach(c -> {
		        Integer targetIndex = GridPane.getColumnIndex(node);
		        if (GridPane.getColumnIndex(c) == targetIndex) {
		            c.setStyle("-fx-background-color:#ffffff;");
		        }
		    }));
		}*/
		System.out.println(skillGridChild.getRowConstraints().size());	
	}
}
