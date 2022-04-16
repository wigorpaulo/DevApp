package com.banco.simulador.services;

import ch.qos.logback.core.status.StatusBase;
import com.banco.simulador.model.Historico;
import com.banco.simulador.model.Usuarios;
import com.banco.simulador.repository.HistoricoRepository;
import com.banco.simulador.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


@Service
public class HistoricoService {

    @Autowired
    private HistoricoRepository historicoRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;

    public void salvarHistorico(Usuarios usuarioOrigem,Usuarios usuariosDestino, BigDecimal valorTransferencia){
        Historico historicoOrigem = new Historico();
        Historico historicoDestinatario = new Historico();
        try {
            Usuarios usuario =  usuarioRepository.findByCpf(usuariosDestino.getCpf());
            Date dataAtual = new Date();
            historicoOrigem.setDataInicial(dataAtual);
            historicoOrigem.setDescricao("Tranferencia para:"+usuario.getNome()+" "+usuario.getSobrenome());
            historicoOrigem.setSaldoFinal(usuarioOrigem.getConta().getSaldo());
            historicoOrigem.setUsuarios(usuarioOrigem);
            historicoOrigem.setValor(valorTransferencia);
            historicoOrigem.setTipo(1);



            historicoDestinatario.setDataInicial(dataAtual);
            historicoDestinatario.setDescricao("Recebido de:"+usuarioOrigem.getNome()+" "+usuarioOrigem.getSobrenome());
            historicoDestinatario.setSaldoFinal(usuario.getConta().getSaldo());
            historicoDestinatario.setUsuarios(usuario);
            historicoDestinatario.setValor(valorTransferencia);
            historicoDestinatario.setTipo(2);

            historicoRepository.save(historicoOrigem);
            historicoRepository.save(historicoDestinatario);
        }catch (Exception e){
           System.out.println(e.getMessage());
        }


    }

    public List<Historico> buscarHistoricoMes(Integer mes,Long idUsuario){

        return  historicoRepository.findByMes(mes, idUsuario);

    }
}
