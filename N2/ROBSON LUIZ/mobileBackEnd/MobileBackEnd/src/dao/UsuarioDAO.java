package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


import model.Usuario;



public class UsuarioDAO {
    
    
    private final Connection connection;

    public UsuarioDAO(Connection connection) {
        this.connection = connection;
    }

    public UsuarioDAO() {
        throw new UnsupportedOperationException("Not supported yet."); 
    }
    //Create no BD
    public void insert(Usuario usuario) throws SQLException{
                   
            String sql = "insert into usuario (usuario,status,senha) values ('?','?','?');";    
            
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1,usuario.getUsername());
            statement.setString(2,usuario.getPassword());
            statement.setString(3,usuario.getStatus());
            statement.execute();           
      
    }
    //upadte
    public void update (Usuario usuario) throws SQLException{
        String sql = "update  usuario set usuario = ?, senha = ?, status = ? where id = ?;";    
            
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1,usuario.getUsername());
            statement.setString(2,usuario.getPassword());
            statement.setString(3,usuario.getStatus());
            statement.setInt(4,usuario.getId());
            statement.execute(); 
            
    }
    
    public void insertOrUpdate (Usuario usuario) throws SQLException{
        if(usuario.getId() > 0 ){
            upadte(usuario);
        }else{
            insert(usuario);
        }
    }
            
    //dele        
    
    public void delete(Usuario usuario) throws SQLException{
        String sql = "delete from usuario where id = ?;";    
            
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setInt(1,usuario.getId());
            statement.execute(); 
    }
    
    public ArrayList<Usuario> selectAll() throws SQLException{
        String sql = "select from usuario;";    
            
        PreparedStatement statement = connection.prepareStatement(sql);
        return pesquisa(statement);
    }

    private ArrayList<Usuario> pesquisa(PreparedStatement statement) throws SQLException {
        ArrayList<Usuario> usuarios = new ArrayList<Usuario>();
        
        statement.execute(); 
        ResultSet resultSet = statement.getResultSet();
        
        while(resultSet.next()){
            int id = resultSet.getInt("id");
            String usuario = resultSet.getString("usuario");
            String senha = resultSet.getString("senha");
            String status =resultSet.getString("status");
            
            Usuario usuarioComDadosDoBanco = new Usuario(id,usuario,senha,status);
            usuarios.add(usuarioComDadosDoBanco);
        }
        return usuarios;
    }
    
    
    public Usuario selectPorId (Usuario usuario) throws SQLException{
        String sql = " Select * From usuario where id = ?;";
        PreparedStatement statement = connection.prepareStatement(sql);
        statement.setInt(1,usuario.getId());
        
        return pesquisa(statement).get(0);
       
        
    }
    
    
    
    //Verificar se existe no BD 
    public boolean existeNoBancoPorUsuarioESenha(Usuario usuario) throws SQLException {
        
        String sql = " Select * From usuario where = '?' and senha = '?' ";
        PreparedStatement statement = connection.prepareStatement(sql);
        statement.setString(1,usuario.getUsername());
        statement.setString(2,usuario.getPassword());
        statement.execute(); 
        
        ResultSet resultSet = statement.getResultSet();
        return resultSet.next();
        
    }

    private void upadte(Usuario usuario) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    
}