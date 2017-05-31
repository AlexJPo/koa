package koa.helpers;

import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.Reader;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class JsonHelper {	
	@SuppressWarnings("unchecked")
	public static Object parseJsonModelFromFile(String filePath, Object classOfModel, Object cls) {
		Reader reader;

		try {
			reader = new InputStreamReader(new FileInputStream(filePath), "UTF-8");			
			Gson gson = new GsonBuilder().create();			
			classOfModel = gson.fromJson(reader, (Class<Object>) cls);
			reader.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return classOfModel;
	}
}
