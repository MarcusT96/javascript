import type { LocalizationResource } from '@clerk/types';

export const frFR: LocalizationResource = {
  locale: 'fr-FR',
  socialButtonsBlockButton: 'Continuer avec {{provider|titleize}}',
  dividerText: 'ou',
  formFieldLabel__emailAddress: 'Adresse e-mail',
  formFieldLabel__emailAddresses: 'Adresses e-mail',
  formFieldLabel__phoneNumber: 'Numéro de téléphone',
  formFieldLabel__username: "Nom d'utilisateur",
  formFieldLabel__emailAddress_phoneNumber: 'Adresse e-mail ou numéro de téléphone',
  formFieldLabel__emailAddress_username: "Adresse email ou nom d'utilisateur",
  formFieldLabel__phoneNumber_username: "numéro de téléphone ou nom d'utilisateur",
  formFieldLabel__emailAddress_phoneNumber_username: "Adresse e-mail, numéro de téléphone ou nom d'utilisateur",
  formFieldLabel__password: 'Mot de passe',
  formFieldLabel__currentPassword: 'Mot de passe actuel',
  formFieldLabel__newPassword: 'Nouveau mot de passe',
  formFieldLabel__confirmPassword: 'Confirmez le mot de passe',
  formFieldLabel__signOutOfOtherSessions: 'Se déconnecter de tous les autres appareils',
  formFieldLabel__firstName: 'Prénom',
  formFieldLabel__lastName: 'Nom de famille',
  formFieldLabel__backupCode: 'Code de récupération',
  formFieldLabel__organizationName: "Nom de l'organisation",
  formFieldLabel__role: 'Rôle',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    'Saisissez ou collez une ou plusieurs adresses e-mail, séparées par des espaces ou des virgules',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__phoneNumber_username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldAction__forgotPassword: 'Mot de passe oublié?',
  formFieldHintText__optional: 'Optionnel',
  formButtonPrimary: 'Continuer',
  signInEnterPasswordTitle: 'Tapez votre mot de passe',
  backButton: 'Retour',
  footerActionLink__useAnotherMethod: 'Utiliser une autre méthode',
  badge__primary: 'Principal',
  badge__thisDevice: 'Cet appareil',
  badge__userDevice: 'Appareil utilisateur',
  badge__otherImpersonatorDevice: "Autre dispositif d'imitation",
  badge__default: 'Défaut',
  badge__unverified: 'Non vérifié',
  badge__requiresAction: 'Nécessite une action',
  badge__you: 'Vous',
  footerPageLink__help: 'Aider',
  footerPageLink__privacy: 'Intimité',
  footerPageLink__terms: 'Conditions',
  paginationButton__previous: 'Précédent',
  paginationButton__next: 'Prochain',
  paginationRowText__displaying: 'Affichage',
  paginationRowText__of: 'de',
  membershipRole__admin: 'Administrateur',
  membershipRole__basicMember: 'Membre',
  membershipRole__guestMember: 'Invité',
  signUp: {
    start: {
      title: 'Créez votre compte',
      subtitle: 'pour continuer à {{applicationName}}',
      actionText: 'Vous avez déjà un compte ?',
      actionLink: "S'identifier",
    },
    emailLink: {
      title: 'Vérifiez votre e-mail',
      subtitle: 'pour continuer à {{applicationName}}',
      formTitle: 'lien de vérification',
      formSubtitle: 'Utilisez le lien de vérification envoyé à votre adresse e-mail',
      resendButton: 'Renvoyer le lien',
      verified: {
        title: 'Compte créé',
      },
      loading: {
        title: 'Création de votre compte...',
      },
      verifiedSwitchTab: {
        title: 'Courriel vérifié avec succès',
        subtitle: "Revenez à l'onglet nouvellement ouvert pour continuer",
        subtitleNewTab: "Revenir à l'onglet précédent pour continuer",
      },
    },
    emailCode: {
      title: 'Vérifiez votre e-mail',
      subtitle: 'pour continuer à {{applicationName}}',
      formTitle: 'Le code de vérification',
      formSubtitle: 'Entrez le code de vérification envoyé à votre adresse e-mail',
      resendButton: 'Renvoyer le code',
    },
    phoneCode: {
      title: 'Vérifiez votre téléphone',
      subtitle: 'pour continuer à {{applicationName}}',
      formTitle: 'Le code de vérification',
      formSubtitle: 'Entrez le code de vérification envoyé à votre numéro de téléphone',
      resendButton: 'Renvoyer le code',
    },
    continue: {
      title: 'Remplir les champs manquants',
      subtitle: 'pour continuer vers {{applicationName}}',
      actionText: 'Vous avez déjà un compte ?',
      actionLink: "S'identifier",
    },
  },
  signIn: {
    start: {
      title: "S'identifier",
      subtitle: 'pour continuer vers {{applicationName}}',
      actionText: "Vous n'avez pas encore de compte ?",
      actionLink: "S'inscrire",
    },
    password: {
      title: 'Tapez votre mot de passe',
      subtitle: 'pour continuer à {{applicationName}}',
      actionLink: 'Utiliser une autre méthode',
    },
    emailCode: {
      title: 'Vérifiez votre messagerie',
      subtitle: 'pour continuer vers {{applicationName}}',
      formTitle: 'Le code de vérification',
      formSubtitle: 'Entrez le code de vérification envoyé à votre adresse e-mail',
      resendButton: 'Renvoyer le code',
    },
    emailLink: {
      title: 'Vérifiez votre messagerie',
      subtitle: 'pour continuer vers {{applicationName}}',
      formTitle: 'lien de vérification',
      formSubtitle: 'Utilisez le lien de vérification envoyé par e-mail',
      resendButton: 'Renvoyer le lien',
      unusedTab: {
        title: 'Vous pouvez fermer cet onglet',
      },
      verified: {
        title: 'Connexion réussie',
        subtitle: 'Vous serez bientôt redirigé',
      },
      verifiedSwitchTab: {
        subtitle: "Revenir à l'onglet d'origine pour continuer",
        titleNewTab: 'Connecté sur un autre onglet',
        subtitleNewTab: "Revenez à l'onglet nouvellement ouvert pour continuer",
      },
      loading: {
        title: 'Signing in...',
        subtitle: 'Vous allez bientôt être redirigé',
      },
      failed: {
        title: "Ce lien de vérification n'est pas valide",
        subtitle: "Retourner à l'onglet original pour continuer",
      },
      expired: {
        title: 'Ce lien de vérification a expiré',
        subtitle: "Retournez à l'onglet d'origine pour continuer",
      },
    },
    phoneCode: {
      title: 'Regarde ton Téléphone',
      subtitle: 'pour continuer vers {{applicationName}}',
      formTitle: 'Le code de vérification',
      formSubtitle: 'Entrez le code de vérification envoyé à votre numéro de téléphone',
      resendButton: 'Renvoyer le code',
    },
    phoneCodeMfa: {
      title: 'Regarde ton Téléphone',
      formTitle: 'Le code de vérification',
      formSubtitle: 'Entrez le code de vérification envoyé à votre numéro de téléphone',
      resendButton: 'Renvoyer le code',
      subtitle: '',
    },
    totpMfa: {
      title: 'Vérification en deux étapes',
      subtitle: '',
      formTitle: 'Le code de vérification',
      formSubtitle: "Entrez le code de vérification généré par votre application d'authentification",
    },
    backupCodeMfa: {
      title: 'Entrez un code de récupération',
      subtitle: 'pour continuer vers {{applicationName}}',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Utiliser une autre méthode',
      actionLink: "Obtenir de l'aide",
      blockButton__emailLink: 'Envoyer le lien à {{identifier}}',
      blockButton__emailCode: 'Envoyer le code à {{identifier}}',
      blockButton__phoneCode: 'Envoyer le code à {{identifier}}',
      blockButton__password: 'Connectez-vous avec votre mot de passe',
      blockButton__totp: "Utilisez votre application d'authentification",
      blockButton__backupCode: 'Utiliser un code de récupération',
      getHelp: {
        title: "Obtenir de l'aide",
        content:
          "Si vous rencontrez des difficultés pour vous connecter à votre compte, envoyez-nous un e-mail et nous travaillerons avec vous pour rétablir l'accès dès que possible.",
        blockButton__emailSupport: 'Assistance par e-mail',
      },
    },
    noAvailableMethods: {
      title: 'Impossible de se connecter',
      subtitle: "Une erreur s'est produite",
      message: "Impossible de poursuivre la connexion. Aucun facteur d'authentification n'est disponible.",
    },
  },
  userProfile: {
    mobileButton__menu: 'Menu',
    formButtonPrimary__continue: 'Continuer',
    formButtonPrimary__finish: 'Retour',
    formButtonReset: 'Annuler',
    start: {
      headerTitle__account: 'Compte',
      headerTitle__security: 'Sécurité',
      headerSubtitle__account: 'Gérer les informations de votre compte',
      headerSubtitle__security: 'Gérer vos préférences de sécurité',
      profileSection: {
        title: 'Profil',
      },
      usernameSection: {
        title: "Nom d'utilisateur",
        primaryButton__changeUsername: "Changer le nom d'utilisateur",
        primaryButton__setUsername: "Définir le nom d'utilisateur",
      },
      emailAddressesSection: {
        title: 'Adresses e-mail',
        primaryButton: 'Ajouter une adresse e-mail',
        detailsTitle__primary: 'Adresse e-mail principale',
        detailsSubtitle__primary: "Cette adresse e-mail est l'adresse e-mail principale",
        detailsAction__primary: 'Compléter la vérification',
        detailsTitle__nonPrimary: 'Définir comme adresse e-mail principale',
        detailsSubtitle__nonPrimary:
          'Définissez cette adresse e-mail comme adresse principale pour recevoir les communications concernant votre compte.',
        detailsAction__nonPrimary: 'Définir comme principale',
        detailsTitle__unverified: 'Adresse e-mail non vérifiée',
        detailsSubtitle__unverified:
          "Cette adresse e-mail n'a pas été vérifiée et ses fonctionnalités peuvent être limitées",
        detailsAction__unverified: 'Compléter la vérification',
        destructiveActionTitle: 'Retirer',
        destructiveActionSubtitle: 'Supprimez cette adresse e-mail et retirez-la de votre compte',
        destructiveAction: "Supprimer l'adresse e-mail",
      },
      phoneNumbersSection: {
        title: 'Les numéros de téléphone',
        primaryButton: 'Ajouter un numéro de téléphone',
        detailsTitle__primary: 'Numéro de téléphone principal',
        detailsSubtitle__primary: 'Ce numéro de téléphone est le numéro de téléphone principal',
        detailsAction__primary: 'Compléter la vérification',
        detailsTitle__nonPrimary: 'Définir comme numéro de téléphone principal',
        detailsSubtitle__nonPrimary:
          'Définissez ce numéro de téléphone comme numéro principal pour recevoir les communications concernant votre compte.',
        detailsAction__nonPrimary: 'Définir comme principale',
        detailsTitle__unverified: 'Numéro de téléphone non vérifié',
        detailsSubtitle__unverified:
          "Ce numéro de téléphone n'a pas été vérifié et sa fonctionnalité peut être limitée",
        detailsAction__unverified: 'Compléter la vérification',
        destructiveActionTitle: 'Retirer',
        destructiveActionSubtitle: 'Supprimez ce numéro de téléphone et retirez-le de votre compte',
        destructiveAction: 'Supprimer le numéro de téléphone',
      },
      connectedAccountsSection: {
        title: 'Comptes connectés',
        primaryButton: 'Connecter le compte',
        title__conectionFailed: 'Retenter la connexion a échoué',
        title__connectionFailed: 'Retenter la connexion a échoué',
        actionLabel__conectionFailed: 'Réessayer',
        actionLabel__connectionFailed: 'Réessayer',
        destructiveActionTitle: 'Retirer',
        destructiveActionSubtitle: 'Supprimer ce compte connecté de votre compte',
        destructiveActionAccordionSubtitle: 'Supprimer le compte connecté',
      },
      passwordSection: {
        title: 'Mot de passe',
        primaryButton__changePassword: 'Changer le mot de passe',
        primaryButton__setPassword: 'Définir le mot de passe',
        primaryButton__removePassword: '',
      },
      mfaSection: {
        title: 'Vérification en deux étapes',
        primaryButton: 'Ajouter la vérification en deux étapes',
        phoneCode: {
          destructiveActionTitle: 'Retirer',
          destructiveActionSubtitle: 'Supprimer ce numéro de téléphone des méthodes de vérification en deux étapes',
          destructiveActionLabel: 'Supprimer le numéro de téléphone',
          title__default: 'Facteur par défaut',
          title__setDefault: 'Définir comme facteur par défaut',
          subtitle__default:
            'Ce facteur sera utilisé comme méthode de vérification en deux étapes par défaut lors de la connexion.',
          subtitle__setDefault:
            "Définissez ce facteur comme facteur par défaut pour l'utiliser comme méthode de vérification en deux étapes par défaut lors de la connexion.",
          actionLabel__setDefault: 'Définir par défaut',
        },
        backupCodes: {
          headerTitle: 'Codes de récupération',
          title__regenerate: 'Régénérer les codes de récupération',
          subtitle__regenerate:
            'Obtenez de nouveaux codes de récupération sécurisés. Les codes de récupération antérieurs seront supprimés et ne pourront pas être utilisés.',
          actionLabel__regenerate: 'Régénérer les codes',
        },
        totp: {
          headerTitle: "Application d'authentification",
          title: 'Facteur par défaut',
          subtitle:
            'Ce facteur sera utilisé comme méthode de vérification à deux facteurs par défaut lors de la connexion.',
          destructiveActionTitle: 'Désactiver',
          destructiveActionSubtitle: "Désactiver l'authentification à deux facteurs lors de la connexion",
          destructiveActionLabel: "Désactiver l'authentification à deux facteurs",
        },
      },
      activeDevicesSection: {
        title: 'Appareils actifs',
        primaryButton: 'Appareils actifs',
        detailsTitle: 'Appareil actuel',
        detailsSubtitle: "Ceci est l'appareil que vous utilisez actuellement",
        destructiveActionTitle: 'Déconnexion',
        destructiveActionSubtitle: 'Déconnectez-vous de votre compte sur cet appareil',
        destructiveAction: "Se déconnecter de l'appareil",
      },
      web3WalletsSection: {
        title: 'Portefeuilles Web3',
        primaryButton: 'Portefeuilles Web3',
        destructiveActionTitle: 'Retirer',
        destructiveActionSubtitle: 'Supprimer ce portefeuille Web3 de votre compte',
        destructiveAction: 'Supprimer le portefeuille',
      },
    },
    profilePage: {
      title: 'Mettre à jour le profil',
      imageFormTitle: 'Photo de profil',
      imageFormSubtitle: 'Télécharger une image',
      imageFormDestructiveActionSubtitle: "Supprimer l'image",
      fileDropAreaTitle: 'Faites glisser le fichier ici, ou...',
      fileDropAreaAction: 'Choisir le dossier',
      fileDropAreaHint: 'Téléchargez une image JPG, PNG, GIF ou WEBP inférieure à 10 Mo',
      successMessage: 'Votre profil a été mis a jour.',
    },
    usernamePage: {
      title: "Mettre à jour le nom d'utilisateur",
      successMessage: "Votre nom d'utilisateur a été mis à jour.",
    },
    emailAddressPage: {
      title: 'Ajouter une adresse e-mail',
      emailCode: {
        formHint: 'Un e-mail contenant un code de vérification sera envoyé à cette adresse e-mail.',
        formTitle: 'Le code de vérification',
        formSubtitle: 'Saisissez le code de vérification envoyé à {{identifier}}',
        resendButton: 'Renvoyer le lien',
        successMessage: "L'e-mail {{identifier}} a été vérifié et ajouté à votre compte.",
      },
      emailLink: {
        formHint: 'Un e-mail contenant un lien de vérification sera envoyé à cette adresse e-mail.',
        formTitle: 'lien de vérification',
        formSubtitle: "Cliquez sur le lien de vérification dans l'e-mail envoyé à {{identifier}}",
        resendButton: 'Renvoyer le lien',
        successMessage: "L'e-mail {{identifier}} a été vérifié et ajouté à votre compte.",
      },
      removeResource: {
        title: "Supprimer l'adresse e-mail",
        messageLine1: '{{identifier}} sera supprimé de ce compte.',
        messageLine2: 'Vous ne pourrez plus vous connecter avec cette adresse e-mail.',
        successMessage: '{{emailAddress}} a été supprimé de votre compte.',
      },
    },
    phoneNumberPage: {
      title: 'Ajouter un numéro de téléphone',
      successMessage: '{{identifier}} a été vérifié et ajouté à votre compte.',
      infoText: 'Un message texte contenant un lien de vérification sera envoyé à ce numéro de téléphone.',
      infoText__secondary: 'Des messages et débits de données peuvent être appliqués.',
      removeResource: {
        title: 'Supprimer le numéro de téléphone',
        messageLine1: '{{identifier}} sera supprimé de ce compte.',
        messageLine2: 'Vous ne pourrez plus vous connecter avec ce numéro de téléphone.',
        successMessage: '{{phoneNumber}} a été supprimé de votre compte.',
      },
    },
    connectedAccountPage: {
      title: 'Ajouter un compte connecté',
      formHint: 'Sélectionnez un fournisseur pour connecter votre compte.',
      formHint__noAccounts: "Aucun fournisseur de compte externe n'est disponible.",
      socialButtonsBlockButton: 'Connecter {{provider|titleize}} compte',
      successMessage: 'Le fournisseur a été ajouté à votre compte',
      removeResource: {
        title: 'Supprimer le compte connecté',
        messageLine1: '{{identifier}} sera supprimé de ce compte.',
        messageLine2:
          'Vous ne pourrez plus utiliser ce compte connecté et toutes les fonctionnalités dépendantes ne fonctionneront plus.',
        successMessage: '{{connectedAccount}} a été supprimé de votre compte.',
      },
    },
    web3WalletPage: {
      title: 'Ajouter un portefeuille Web3',
      subtitle__availableWallets: 'Sélectionnez un portefeuille Web3 pour vous connecter à votre compte.',
      subtitle__unavailableWallets: "Il n'y a pas de portefeuilles Web3 disponibles.",
      successMessage: 'Le portefeuille a été ajouté à votre compte.',
      removeResource: {
        title: 'Supprimer le portefeuille Web3',
        messageLine1: '{{identifier}} sera supprimé de ce compte.',
        messageLine2: 'Vous ne pourrez plus vous connecter avec ce portefeuille web3.',
        successMessage: '{{web3Wallet}} a été supprimé de votre compte.',
      },
    },
    passwordPage: {
      title: 'Mettre à jour le mot de passe',
      removePasswordTitle: '',
      changePasswordTitle: 'Changer le mot de passe',
      successMessage: 'Votre mot de passe a été mis à jour.',
      removePasswordSuccessMessage: '',
      changePasswordSuccessMessage: 'Votre mot de passe a été mis à jour.',
      sessionsSignedOutSuccessMessage: 'Tous les autres appareils ont été déconnectés.',
    },
    mfaPage: {
      title: 'Ajouter la vérification en deux étapes',
      formHint: 'Sélectionnez une méthode à ajouter.',
    },
    mfaTOTPPage: {
      title: "Ajouter une application d'authentification",
      verifyTitle: 'Le code de vérification',
      verifySubtitle: "Entrez le code de vérification généré par votre application d'authentification",
      successMessage:
        'La vérification en deux étapes est maintenant activée. Lors de la connexion, vous devrez saisir un code de vérification de cet authentificateur comme étape supplémentaire.',
      authenticatorApp: {
        infoText__ableToScan:
          "Configurez une nouvelle méthode de connexion dans votre application d'authentification et scannez le code QR suivant pour le lier à votre compte.",
        infoText__unableToScan:
          'Configurez une nouvelle méthode de connexion dans votre authentificateur et entrez la clé fournie ci-dessous.',
        inputLabel__unableToScan1:
          'Assurez-vous que les mots de passe basés sur le temps ou à usage unique sont activés, puis terminez la liaison de votre compte.',
        inputLabel__unableToScan2:
          "Alternativement, si votre authentificateur prend en charge les URI TOTP, vous pouvez également copier l'URI complet.",
        buttonAbleToScan__nonPrimary: 'Scannez le code QR à la place',
        buttonUnableToScan__nonPrimary: 'Vous ne pouvez pas scanner le code QR ?',
      },
      removeResource: {
        title: 'Supprimer la vérification en deux étapes',
        messageLine1: 'Les codes de vérification de cet authentificateur ne seront plus requis lors de la connexion.',
        messageLine2: 'Votre compte sera moins sécurisé. Souhaitez-vous continuer ?',
        successMessage: "La vérification en deux étapes via l'application d'authentification a été supprimée.",
      },
    },
    mfaPhoneCodePage: {
      title: 'Ajouter la vérification du code SMS',
      primaryButton__addPhoneNumber: 'Ajouter un numéro de téléphone',
      subtitle__availablePhoneNumbers:
        'Sélectionnez un numéro de téléphone pour vous inscrire à la vérification en deux étapes du code SMS.',
      subtitle__unavailablePhoneNumbers:
        "Il n'y a pas de numéros de téléphone disponibles pour s'inscrire à la vérification en deux étapes du code SMS.",
      successMessage:
        'La vérification en deux étapes du code SMS est désormais activée pour ce numéro de téléphone. Lors de la connexion, vous devrez saisir un code de vérification envoyé à ce numéro de téléphone comme étape supplémentaire.',
      removeResource: {
        title: 'Supprimer la vérification en deux étapes',
        messageLine1: '{{identifier}} ne recevra plus de codes de validation lors de la connexion.',
        messageLine2: 'Votre compte sera moins sécurisé. Souhaitez-vous continuer ?',
        successMessage: 'La vérification en deux étapes du code SMS a été supprimée pour {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Ajouter la vérification du code de récupération',
      title__codelist: 'Codes de récupération',
      subtitle__codelist: 'Conservez-les en toute sécurité et gardez-les secrets.',
      infoText1: 'Les codes de récupération seront activés pour ce compte.',
      infoText2:
        "Gardez les codes de récupération secrets et stockez-les en toute sécurité. Vous pouvez régénérer les codes de récupération si vous pensez qu'ils ont été compromis.",
      successSubtitle:
        "Vous pouvez utiliser l'un d'entre eux pour vous connecter à votre compte, si vous perdez l'accès à votre dispositif d'authentification.",
      successMessage:
        "Les codes de récupération sont maintenant activés. Vous pouvez utiliser l'un d'entre eux pour vous connecter à votre compte, si vous perdez l'accès à votre dispositif d'authentification. Chaque code ne peut être utilisé qu'une seule fois.",
      actionLabel__copy: 'Copier tous les codes',
      actionLabel__copied: 'Copié !',
      actionLabel__download: 'Télécharger en .txt',
      actionLabel__print: 'Imprimer',
    },
  },
  userButton: {
    action__manageAccount: 'Gérer son compte',
    action__signOut: 'Déconnexion',
    action__signOutAll: 'Se déconnecter de tous les comptes',
    action__addAccount: 'Ajouter un compte',
  },
  organizationSwitcher: {
    personalWorkspace: 'Espace de travail personnel',
    notSelected: 'Aucune organisation sélectionnée',
    action__createOrganization: 'Créer une organisation',
    action__manageOrganization: "Gérer l'organisation",
  },
  impersonationFab: {
    title: 'Connecté en tant que {{identifier}}',
    action__signOut: 'Déconnexion',
  },
  organizationProfile: {
    start: {
      headerTitle__members: 'Membres',
      headerTitle__settings: 'Réglages',
      headerSubtitle__members: "Afficher et gérer les membres de l'organisation",
      headerSubtitle__settings: "Gérer les paramètres de l'organisation",
    },
    profilePage: {
      title: 'Profil de l’organisation',
      subtitle: 'Gérer les membres de l’organisation',
      successMessage: "L'organisation a été mise à jour.",
      dangerSection: {
        title: 'Danger',
        leaveOrganization: {
          title: "Quitter l'organisation",
          messageLine1:
            "Êtes-vous sûr de vouloir quitter cette organisation ? Vous perdrez l'accès à cette organisation et à ses applications.",
          messageLine2: 'Cette action est permanente et irréversible.',
          successMessage: "Vous avez quitté l'organisation.",
        },
      },
    },
    invitePage: {
      title: 'Inviter des membres',
      subtitle: 'Inviter des membres à rejoindre l’organisation',
      successMessage: 'Les invitations ont été envoyées.',
      detailsTitle__inviteFailed:
        'Les invitations suivantes n’ont pas pu être envoyées. Veuillez régler ce problème et réessayer:',
      formButtonPrimary__continue: 'Envoyer des invitations',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Aucun membre',
      action__invite: 'Inviter',
      start: {
        headerTitle__active: 'Actif',
        headerTitle__invited: 'Invité',
      },
      activeMembersTab: {
        tableHeader__user: 'Utilisateur',
        tableHeader__joined: 'Rejoint',
        tableHeader__role: 'Rôle',
        tableHeader__actions: '',
        menuAction__remove: 'Supprimer',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Invité',
        menuAction__revoke: "Révoquer l'invitation",
      },
    },
  },
  createOrganization: {
    title: 'Créer une organisation',
    formButtonSubmit: 'Créer l’organisation',
    subtitle: 'Créer une organisation pour votre équipe',
    invitePage: {
      formButtonReset: 'Passer',
    },
  },
  unstable__errors: {
    form_identifier_not_found: '',
    form_password_pwned: '',
    form_username_invalid_length: '',
    form_param_format_invalid: 'Le format est invalide',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: 'Code incorrect',
    form_password_incorrect: 'Mot de passe incorrect',
    not_allowed_access: '',
    form_identifier_exists: '',
    passwordComplexity: {
      sentencePrefix: '',
      minimumLength: '',
      maximumLength: '',
      requireNumbers: '',
      requireLowercase: '',
      requireUppercase: '',
      requireSpecialCharacter: '',
    },
    zxcvbn: {
      notEnough: "Votre mot de passe n'est pas assez fort.",
      warnings: {
        straightRow: 'Les lignes droites de touches de votre clavier sont faciles à deviner',
        keyPattern: 'Des motifs de clavier courts sont faciles à deviner',
        simpleRepeat: "Les caractères répétés comme 'aaa' sont faciles à deviner",
        extendedRepeat: "Les caractères répétés comme 'abcabcabc' sont faciles à deviner",
        sequences: "Des séquences de caractères communs comme 'abc' sont faciles à deviner",
        recentYears: 'Les années récentes sont faciles à deviner.',
        dates: 'Les dates sont faciles à deviner.',
        topTen: 'Ce mot de passe est très utilisé.',
        topHundred: 'Ce mot de passe est fréquemment utilisé.',
        common: 'Ce mot de passe est couramment utilisé.',
        similarToCommon: 'Ce mot de passe est similaire à un mot de passe couramment utilisé.',
        wordByItself: 'Les mots simples sont faciles à deviner.',
        namesByThemselves: 'Des noms ou des prénoms simples sont faciles à deviner.',
        commonNames: 'Les noms communs et les noms de famille sont faciles à deviner.',
        userInputs: 'Le mot de passe ne doit pas comporter de données personnelles ou liées au site.',
        pwned: 'Votre mot de passe a été divulgué suite à une violation de données sur Internet.',
      },
      suggestions: {
        l33t: "Évitez les substitutions de lettres prévisibles comme '@' pour 'a'.",
        reverseWords: 'Évitez les orthographes inversées des mots courants',
        allUppercase: 'Mettez quelques lettres en majuscules, mais pas toutes.',
        capitalization: 'Capitalisez mais pas seulement la première lettre.',
        dates: 'Évitez les dates et les années qui vous sont associées. (ex: date ou année de naissance)',
        recentYears: 'Évitez les dernières années.',
        associatedYears: 'Évitez les années qui vous sont associées. (ex: date de naissance)',
        sequences: 'Évitez les séquences de caractères courantes.',
        repeated: 'Évitez les mots et les caractères répétés.',
        longerKeyboardPattern: 'Utilisez des motifs de clavier plus longs et changez de sens de frappe plusieurs fois.',
        anotherWord: 'Ajoutez des mots moins courants.',
        useWords: 'Utilisez plusieurs mots, mais évitez les phrases courantes.',
        noNeed:
          'Vous pouvez créer des mots de passe forts sans utiliser de symboles, de chiffres ou de lettres majuscules.',
        pwned: 'Si vous utilisez ce mot de passe ailleurs, vous devriez le modifier.',
      },
    },
  },
  dates: {
    previous6Days: "{{ date | weekday('fr-FR','long') }} dernier à {{ date | timeString('fr-FR') }}",
    lastDay: "Hier à {{ date | timeString('fr-FR') }}",
    sameDay: "Aujourd'hui à {{ date | timeString('fr-FR') }}",
    nextDay: "Demain à {{ date | timeString('fr-FR') }}",
    next6Days: "{{ date | weekday('fr-FR','long') }} à {{ date | timeString('fr-FR') }}",
    numeric: "{{ date | numeric('fr-FR') }}",
  },
} as const;
