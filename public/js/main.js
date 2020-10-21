angular
  .module('myHeroTraining', ['ngRoute', 'ngSanitize', 'pascalprecht.translate'])
  .config(function ($routeProvider, $translateProvider) {
    //  $locationProvider.html5Mode(true);
    $translateProvider.translations('pt-BR', {
      HEADER: {
        MENU: {
          REGISTER: 'Cadastre-se',
          DROPDOWN: 'Selecione o Idioma',
          PORTUGUES: 'Português',
          INGLES: 'Inglês',
          PESQUISA: 'Pesquisar',
          SAIR: 'Sair',
          SEUSTREINOS: 'Treinos Para Você',
          MEUSDADOS: 'Meus Dados',
          EXERCICIOS: 'Exercicíos',
        },
        LOGIN: {
          PLACEHOLDER: {
            SENHA: 'Digite Sua Senha',
            LEMBRAR: 'Lembrar-me',
            ESQUECIS: 'Esqueci minha senha',
            BOTAOL: 'Entrar',
            PRINCIPALLABEL: 'Treinos Funcionais',
            SUBLABEL:
              'Faça os treinos de acordo com sua rotina e melhore sua saúde!',
            ROTINELABEL: 'Crie uma rotina para praticar exercícios:',
            ABOUT: 'SOBRE',
            SAUDE: `Praticar exercícios físiscos regularmente pode ajudar em diversos aspectos da sua
            saúde,
            reduz risco de hipertensão, doenças cardíacas, AVC, diabetes, câncer, depressão, reduz ansiedade e
            estresse, melhora disposição.`,
            EXPERIENCIA: 'Experiência',
            ESTRATEGIA: 'Nossa Estratégia',
            ESTRATEGIATEXT:
              'Com a MyHeroTrainig qualquer pessoa pode começar a praticar exercícios' +
              'físicos e evoluir nos treinos melhorarando sua saúde.',
            MISSAO: 'Missão',
            MISSAOTEXT:
              'Nossa missão é contrubuir para manutenção e melhora da saúde da' +
              'população, facilitando o acesso a atividade física e incentivo da' +
              'mesma.',
            COMOUSAR: 'Como usar:',
            FRASE1:
              'na aplicação você terá disponível treinos que começam no nível 0 iniciante.',
            FRASE2:
              'Inicie os treinos, conforme você os realiza, ganha pontuação e libera mais treinos.',
            FRASE3:
              'Suba cada vez mais de nível e tenha acesso a treinos mais avançados.',
            CADASTRESEAQUI: 'Cadastre-se agora e já comece a treinar!',
          },
        },

        CADASTRO: {
          LCADASTRO: 'Cadastro',
          NOME: 'Nome',
          PNOME: 'Digite seu nome',
          ENOME: 'Nome é um campo obrigatório',
          EMAIL: 'Endereço de E-mail',
          PEMAIL: 'Digite seu E-mail',
          EEMAIL: 'E-mail é um campo obrigatório',
          SENHA: 'Senha',
          ESENHA1: 'Senha é obrigatória',
          ESENHA2:
            'Senha inválida, por favor digite uma senha com no mínimo 6 caracteres',
          PSENHA: 'Digite sua senha',
          DICASENHA:
            '*Mínimo de 8 e máximo de 18 de caracteres com letra maíscula e' +
            '\n' +
            'minuscula, 1 numeral e 1 caractere especial entre' +
            '?=.*[!|@|#|$|%|^|&|*|(|)|-|_])',
          CSENHA: 'Confirme sua Senha',
          CESENHA:
            'Senha inválida, por favor digite uma senha com no mínimo 6 caracteres',
          CESENHA2: 'Senhas Divergentes',
          PESO: 'Peso',
          EPESO: 'O peso informado não é válido',
          PPESO: 'Seu Peso',
          EALTURA: 'A altura informada não é válida',
          ALTURA: 'Altura',
          PALTURA: 'Sua Altura',
          ETELEFONE: 'Telefone é um capo obrigatório',
          ETELEFONE2: 'O telefone fornecido é inválido',
          TELEFONE: 'Telefone 1',
          TELEFONE2: 'Telefone 2',
          PTELEFONE: 'Contato telefônico',
          BOTAOC: 'Cadastrar',
          NASCIMENTO: 'Data de nascimento',
          ENASCIMENTO: 'A data fornecida é inválida',
        },
        PRINCIPAL: {
          FUNCTIONALT: 'treinos Funcionais',
          SUBFUNCTIONALT:
            'Faça os treinos de acordo com sua rotina e melhore sua saúde!',
          ABOUT: 'Sobre',
          EXPERIENCE: 'Experiência',
          EXPERIENCET:
            'Queremos que os nossos usuários tenham a melhor experiência na\n' +
            'prática' +
            'de exercícios físicos, de forma autônoma, prática e motivadora.',

          OurStrategy: 'Nossa Estratégia',
          OurStrategyT:
            'Com a MyHeroTrainig qualquer pessoa pode começar a praticar exercícios físicos e evoluir nos treinos melhorarando sua saúde.',
          ROUTINE: 'Crie uma rotina para praticar exercícios:',

          ROUTINET:
            'Praticar exercícios físiscos regularmente pode ajudar em diversos aspectos da sua' +
            'saúde,' +
            'reduz risco de hipertensão, doenças cardíacas, AVC, diabetes, câncer, depressão, reduz ansiedade e' +
            'estresse, melhora disposição.',
        },
      },
    });

    $translateProvider.translations('en-US', {
      HEADER: {
        MENU: {
          REGISTER: 'Register',
          DROPDOWN: 'Select your Language',
          PORTUGUES: 'Portuguese',
          INGLES: 'English',
          PESQUISA: 'Search',
          SAIR: 'Logout',
          SEUSTREINOS: 'Workouts for you',
          MEUSDADOS: 'My datas',
          EXERCICIOS: 'Exercises',
        },
        LOGIN: {
          PLACEHOLDER: {
            SENHA: 'Type your password here',
            ESQUECIS: 'I forgot my password',
            LEMBRAR: 'Remember me',
            BOTAOL: 'Login',
            PRINCIPALLABEL: 'Functional Training',
            SUBLABEL:
              'Do the workouts according to your routine and improve your health!',
            ROTINELABEL: 'Create a routine to practice exercises:',
            ABOUT: 'ABOUT',
            SAUDE:
              'Practicing phosphide exercises regularly can help in various aspects of your' +
              'Health' +
              'reduces risk of hypertension, heart disease, stroke, diabetes, cancer, depression, reduces anxiety and' +
              'stress, improves mood.',

            EXPERIENCIA: 'Experience',
            ESTRATEGIA: 'Our Strategy',
            ESTRATEGIATEXT:
              'With MyHeroTrainig anyone can start exercising' +
              'and evolve in training by improving your health.',
            MISSAO: 'Mission',
            MISSAOTEXT:
              'Our mission is to build for maintenance and improvement of the health of' +
              'population, facilitating access to physical activity and encouraging' +
              'same.',
            COMOUSAR: 'How to use:',
            FRASE1:
              'In the application you will have available workouts that start at level 0 beginner.',
            FRASE2:
              'Start the workouts as you perform them, earn scores and release more workouts.',
            FRASE3: 'Level up and take access to more advanced workouts',
            CADASTRESEAQUI: 'Sign up now and start training!',
          },
        },

        CADASTRO: {
          LCADASTRO: 'Registration',
          NOME: 'Name',
          PNOME: 'Type your name',
          ENOME: 'Name is required',
          EMAIL: 'E-mail Adress',
          PEMAIL: 'Type your Email',
          EEMAIL: 'E-mail is required',
          SENHA: 'Password',
          ESENHA1: 'Password IS required',
          ESENHA2:
            'Password is not valid, please enter a password of at least 6 characters',
          PSENHA: 'Incorrect password pattern',
          CSENHA: 'Confirm your Password',
          CESENHA:
            'Password is not valid, please enter a password of at least 6 characters',
          CESENHA2: 'Different passwords',
          DICASENHA:
            '* Minimum of 8 and maximum of 18 characters with a capital letter e' +
            ' n' +
            'lowercase, 1 numeral and 1 special character between' +
            '? =. * [! | @ | # | $ |% | ^ | & | * | (|) | - | _]) ',
          PESO: 'Weight',
          EPESO: 'The Weight is not valid',
          PPESO: 'Your weight',
          EALTURA: 'The Height is not valid',
          ALTURA: 'Your Height',
          PALTURA: 'Your height',
          ETELEFONE: 'Telephone is required',
          ETELEFONE2: 'Telephone is not valid',
          TELEFONE: 'Contact Phone 1',
          TELEFONE2: 'Contact Phone 2',
          PTELEFONE: 'Contact Phone',
          BOTAOC: 'Confirm',
          NASCIMENTO: 'Date of birth',
          ENASCIMENTO: 'Date is not valid',
        },

        PRINCIPAL: {
          FUNCTIONALT: 'Functional Training',
          SUBFUNCTIONALT:
            'Do your workouts according to your routine and improve your health!',
          ABOUT: 'ABOUT',
          EXPERIENCE: 'Experience',
          EXPERIENCET:
            'We want our users to have the best experience in\n' +
            'practice' +
            'of physical exercises, in an autonomous, practical and motivating way.',
          OurStrategy: 'Our Strategy',
          OurStrategyT:
            'With MyHeroTrainig anyone can start practicing physical exercises and evolve in training improving their health.',
          ROUTINE: 'Create an exercise routine:',
          ROUTINET:
            'Regular physical exercise can help with many aspects of your life.\n' +
            'Cheers,' +
            'reduces risk of hypertension, heart disease, stroke, diabetes, cancer, depression, reduces anxiety and' +
            'stress, improves mood.',
        },
      },
    });

    $routeProvider.when('/home', {
      templateUrl: './view/home.html',
      controller: 'HomeController',
    });
    $routeProvider.when('/principal', {
      templateUrl: './view/Principal.html',
      controller: 'TreinoController',
    });
    $routeProvider.when('/Cadastro', {
      templateUrl: './view/Cadastro.html',
      controller: 'cadastroController',
    });

    $routeProvider.when('/confirm-reset', {
      templateUrl: './view/trocar-senha/confirmReset.html',
      controller: 'recoverPassword',
    });

    $routeProvider.when('/confirm-reset-success', {
      templateUrl: './view/trocar-senha/confirmResetSucess.html',
    });

    $routeProvider.when('/forgot-password', {
      templateUrl: './view/trocar-senha/forgotPassword.html',
      controller: 'recoverPassword',
    });

    $routeProvider.when('/success-send-reset', {
      templateUrl: './view/trocar-senha/successForgotPassword.html',
    });

    $routeProvider.when('/login', {
      templateUrl: './view/login.html',
      controller: 'login-controller',
    });

    $routeProvider.when('/account-verified', {
      templateUrl: './view/confirmar-email/accountVerified.html',
    });

    $routeProvider.when('/account-verified-error', {
      templateUrl: './view/confirmar-email/accountVerifiedError.html',
    });

    $routeProvider.when('/confirm-account', {
      templateUrl: './view/confirmar-email/accountVerified.html',
      controller: 'confirmEmail',
    });

    $routeProvider.when('/dados_login', {
      templateUrl: './view/dadosLogin.html',
      controller: 'TreinoController',
    });
    $routeProvider.when('/treinos/:id', {
      templateUrl: './view/treino.html',
      controller: 'TreinoController',
    });
    $routeProvider.when('/treino/inicio/:id', {
      templateUrl: './view/inicioTreino.html',
      controller: 'TreinoController',
    });
    $routeProvider.when('/treino/inicio/execucao', {
      templateUrl: './view/TreinoExecucao.html',
      controller: 'TreinoController',
    });
    $routeProvider.when('/descricaoTreino/', {
      templateUrl: './view/descricaoTreino.html',
    });

    $routeProvider.otherwise({ redirectTo: '/principal' });
    $translateProvider.preferredLanguage('pt-BR');
    $translateProvider.useSanitizeValueStrategy('escape');
  });
