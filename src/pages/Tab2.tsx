import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTextarea, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Tab2.css';
import { useHistory, useLocation } from 'react-router';
import { RepositoryPayload } from '../interfaces/RepositoryPayload';
import { createRepository, updateRepository } from '../services/GithubService';
import { Repository } from '../interfaces/Repository';
import React, { useEffect, useState} from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab2: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{ repository?: Repository }>();
  const editingRepository = location.state?.repository;
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  
  const [repoFormData, setRepoFormData] = useState<RepositoryPayload>({
    name: '',
    description: '',
  });

  const setFormName = (value: string) => {
    setRepoFormData((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const setFormDescription = (value: string) => {
    setRepoFormData((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const saveRepository = () => {
    if (repoFormData.name.trim() === '') {
      setErrorMsg('El nombre del repositorio es obligatorio.');
      return;
    }
    setLoading(true);
    console.log("Modo edición:", editingRepository);
    console.log("Datos enviados:", repoFormData);

    const action = editingRepository? updateRepository(
      editingRepository.owner.login,
      editingRepository.name,
      repoFormData
    ): createRepository(repoFormData);
    action .then((repo) => {

      if (repo) {
        setRepoFormData({
          name: '',
          description: '',
        });
        history.push('/tab1');
      }
    }).catch((error) => {
      setErrorMsg(error.message);
    }).finally(() => {
      setLoading(false);
    });
  };

  useIonViewWillEnter(() => {
    setErrorMsg("");
  });
    
  useEffect(() => {
    if (editingRepository) {
      setRepoFormData({
        name: editingRepository.name,
        description: editingRepository.description || "",
      });
    } else {
      setRepoFormData({
        name: "",
      });
    }
  }, [editingRepository]);

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
          value={repoFormData.name}
          onIonChange={(e) => setFormName(e.detail.value!)}
          />

          <IonTextarea
            className="form-field"
            label="Descripción del Repositorio"
            labelPlacement="floating"
            placeholder="Ingrese la descripción del repositorio"
            rows={4}
            value={repoFormData.description}
            onIonChange={(e) => setFormDescription(e.detail.value!)}
          />

          {errorMsg !== "" && <IonText color="danger">{errorMsg}</IonText>}

          <IonButton
            className="form-field"
            expand="block"
            fill="solid"
            onClick={saveRepository}
          >
            {editingRepository ? "Actualizar" : "Guardar"}
          </IonButton>
        </div>
        <LoadingSpinner isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
