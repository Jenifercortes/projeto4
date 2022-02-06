
package br.com.agencia.newcity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.agencia.newcity.model.Promocoes;
import br.com.agencia.newcity.repository.PromocoesRepository;

import java.util.List;

@Service
public class PromocoesService {

    @Autowired
    private PromocoesRepository promocoesRepository;

   public List<Promocoes> listAll(){
       return promocoesRepository.findAll();
   }

   public void save(Promocoes promocoes){
       promocoesRepository.save(promocoes);
   }

   public Promocoes get(Integer id){
       return promocoesRepository.findById(id).get();
   }
   
   public void update(Integer id, Promocoes newPromocoes) {
       Promocoes oldPromocoes = promocoesRepository.getById(id);
       oldPromocoes.setDestinos(newPromocoes.getDestinos());
       oldPromocoes.setValores(newPromocoes.getValores());
       oldPromocoes.setPacotes(newPromocoes.getPacotes());
      
       promocoesRepository.save(oldPromocoes);
   }

   public void delete(Integer id){
       promocoesRepository.deleteById(id);
   }
}
