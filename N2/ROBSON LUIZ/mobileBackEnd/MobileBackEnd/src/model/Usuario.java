package model;


public class Usuario {
    
    private int id;
    private String username;
    private String password;
    private String status;

    public Usuario(String username, String password) {
        this.username = username;
        this.password = password;
    }

    
    
    public Usuario(int id, String username, String password, String status) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.status = status;
    } 

    public Usuario(String username, String password, String status) {
        this.username = username;
        this.password = password;
        this.status = status;
    }

  
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Usuario get(int i) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
    
    
}
