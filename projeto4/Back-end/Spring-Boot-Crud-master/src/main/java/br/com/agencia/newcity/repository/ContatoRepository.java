
package br.com.agencia.newcity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.agencia.newcity.model.Contato;

public interface ContatoRepository extends JpaRepository<Contato,Integer> {


}
