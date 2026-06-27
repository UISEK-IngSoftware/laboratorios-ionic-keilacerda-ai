import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="form-container">
          
          <IonInput 
          className="form-field"
          label="Nombre del Repositorio"
          labelPlacement="floating"
          placeholder="Ingrese el nombre del repositorio"
          />

          <IonTextarea
            className="form-field"
            label="Descripción del Repositorio"
            labelPlacement="floating"
            placeholder="Ingrese la descripción del repositorio"
            rows={4}
          />

          <IonButton
            className="form-field"
            expand="block"
            fill="solid"
          >
            Guardar Repositorio
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
