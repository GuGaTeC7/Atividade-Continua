// VALIDAÇÃO EMAIL
function validaCadastro() {
  const nome = document.getElementById('nome').value;
  const nomeUsuario = document.getElementById('nomeUsuario').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;
  const senhaC = document.getElementById('senhaC').value;
  const sexo = document.querySelector('input[name="gender"]:checked');
  const termos = document.getElementById('termos');
  const logradouro = document.getElementById('logradouro').value;
  const cep = document.getElementById('cep').value;


  if (!nome) {
    bootbox.alert({
    message: 'Insira seu <b>Nome Completo</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!nomeUsuario) {
    bootbox.alert({
    message: 'Insira seu <b>Nome de Usuário</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!email) {
    bootbox.alert({
    message: 'Insira seu <b>Email</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!telefone) {
    bootbox.alert({
    message: 'Insira seu <b>Telefone</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }
  if (!cep) {
    bootbox.alert({
    message: 'Insira seu <b>CEP</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }
  if (!logradouro) {
    bootbox.alert({
    message: 'Insira seu <b>CEP</b> para que o Logradouro e o Bairro sejam preenchidos!',
    size: 'large',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }
  if (!senha) {
    bootbox.alert({
    message: 'Insira uma <b>Senha</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!senhaC) {
    bootbox.alert({
    message: 'Confirme sua <b>Senha</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!sexo) {
    bootbox.alert({
    message: 'Insira seu <b>Sexo Biológico</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }
  if (!termos.checked) {
    bootbox.alert({
    message: 'Aceite os <b>Termos de uso</b> e <b>Política de Privacidade</b>!',
    size: 'large',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  } 


  // VALIDA SENHA
  if (senha !== senhaC) {
    bootbox.alert({
    message: 'Senhas não coincidem!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }
    
  bootbox.alert({
    message: 'Cadastro realizado com <b>sucesso</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
}


  