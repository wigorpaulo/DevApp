package controller;

import dao.Conexao;
import dao.UsuarioDAO;
import java.sql.Connection;
import java.sql.SQLException;
import javax.swing.JOptionPane;
import model.Usuario;
import view.DashboardView;
import view.loginView;


public class LoginController {
    
    private loginView view;

    
    public LoginController(loginView view) {
        this.view = view;
    }
    
    
    

    

    public void autenticator() throws SQLException {
        
        //Buscar o usuario da view
        /*String usuario = view.getjTextFieldUsuario().getText();
        String senha = view.getjPasswordFieldSenha().getText();
        
        Usuario usuarioAutenticar = new Usuario(usuario,senha);
               
        //Verificar se existe no BD 
        
         Connection conexao=new Conexao().getConnection();
         UsuarioDAO usuarioDao = new UsuarioDAO(conexao);
         
         boolean existe = usuarioDao.existeNoBancoPorUsuarioESenha(usuarioAutenticar);
         
         
        //Se existir direcionar para menu
        if (existe){*/
            DashboardView telaDeashBoard = new DashboardView();
        telaDeashBoard.setVisible(true);
        /*}else{
            JOptionPane.showMessageDialog(view, "Usuario ou senha invalidos");
        } */
    }
    
}
