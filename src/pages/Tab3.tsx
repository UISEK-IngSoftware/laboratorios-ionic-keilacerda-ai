import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">
          <IonCard className="card">
            <img alt="Avatar" src="https://avatars.githubusercontent.com/u/236501073?v=4&size=64" />
            <IonCardHeader>
              <IonCardTitle>Keila Cerda Alvarado</IonCardTitle>
              <IonCardSubtitle>keilacerdaalvarado</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Desarrolladora de software.
                Apasionada por la tecnología y el desarrollo de aplicaciones móviles e interfaces de usuario.</p>
            </IonCardContent>
          </IonCard>
            </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
