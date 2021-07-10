export class SistemaAutenticacao {
    static login (usuario, senha) {
        if (SistemaAutenticacao.isAutenticavel(usuario)) {
            return usuario.autenticar(senha);
        }

        return false;
    }

    static isAutenticavel (usuario) {
        return (
            'autenticar' in usuario
            && usuario.autenticar instanceof Function
        );
    }
}
