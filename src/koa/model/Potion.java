package koa.model;

import java.util.ArrayList;
import java.util.List;

public class Potion {
	private String name;
	private List<Reagent> reagents;
	private String effect;
	private String imagePath;
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public List<Reagent> getPotion() {
		return reagents;
	}
	
	public void setPotion(ArrayList<Reagent> reagents) {
		this.reagents = reagents;
	}
	
	public String getEffect() {
		return effect;
	}
	
	public void setEffect(String effect) {
		this.effect = effect;
	}
	
	public String getImagePath() {
		return imagePath;
	}
	
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
}
