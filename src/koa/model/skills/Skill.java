package koa.model.skills;

import java.util.List;

public class Skill {
	private String title;
	private String description;
	private List<Grade> levels;
	private byte points;
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public List<Grade> getLevels() {
		return levels;
	}
	
	public void setLevels(List<Grade> levels) {
		this.levels = levels;
	}
	
	public byte getpoints() {
		return points;
	}
	
	public void setpoints(byte points) {
		this.points = points;
	}
}
