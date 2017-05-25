package koa.model;

public class Reagent {
	private String name;
	private int count;
	private String image;
	
	public Reagent(String reagentName, int reagentCount, String reagentImage) {
		this.name = reagentName;
		this.count = reagentCount;
		this.image = reagentImage;
	}
	
	public String getReagentName() {
		return name;
	}
	
	public void setReagentName(String name) {
		this.name = name;
	}
	
	public int getReagentCount() {
		return count;
	}
	
	public void setReagentCount(int count) {
		this.count = count;
	}
	
	public String getImagePath() {
		return image;
	}

	public void setImagePath(String image) {
		this.image = image;
	}
}
