package koa.model.skills;

public class Grade {	
	private boolean main;
	private String description;
	private String additionallyText;
	
	public boolean isMain() {
		return main;
	}
	
	public void setMain(boolean main) {
		this.main = main;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getadditionallyText() {
		return additionallyText;
	}
	
	public void setadditionallyText(String additionallyText) {
		this.additionallyText = additionallyText;
	}

}
