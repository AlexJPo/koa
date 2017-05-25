package koa.model;

import java.util.ArrayList;
import java.util.List;

public class Receip {
	private List<Potion> minor;
	private List<Potion> greater;
	private List<Potion> master;
	
	public List<Potion> getMinor() {
		return minor;
	}
	
	public void List(ArrayList<Potion> minor) {
		this.minor = minor;
	}
	
	public List<Potion> getGreater() {
		return greater;
	}
	
	public void setGreater(ArrayList<Potion> greater) {
		this.greater = greater;
	}
	
	public List<Potion> getMaster() {
		return master;
	}
	
	public void setMaster(ArrayList<Potion> master) {
		this.master = master;
	}
}
