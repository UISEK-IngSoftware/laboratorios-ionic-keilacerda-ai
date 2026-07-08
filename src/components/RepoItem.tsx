import { IonAlert, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail } from "@ionic/react";
import "./RepoItem.css";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { pencilOutline, trashOutline } from "ionicons/icons";
import { Repository } from "../interfaces/Repository";


interface RepoItemProps extends Repository {
  onDelete: (repository: Repository) => void;
}

const RepoItem: React.FC<RepoItemProps> = ({
  onDelete,
  ...repository
}) => {

  const history = useHistory();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const editRepository = () => {
    history.push("/tab2", {repository, });
  };

  const confirmDelete = () => {
    setShowDeleteAlert(true);
  };

  const deleteCurrentRepository = () => {
    setShowDeleteAlert(false);
    onDelete(repository);
  };

    return ( <>
    
    <IonItemSliding>
        <IonItem>
            <IonThumbnail slot="start">
              <img alt={repository.name} src={repository.owner.avatar_url} />
              </IonThumbnail>
              <IonLabel>
                <h2>{repository.name}</h2>
                <p>{repository.description}</p>
                <p>Lenguaje: {repository.language}</p>
              </IonLabel>
        </IonItem>

            <IonItemOptions>
              <IonItemOption color="primary" onClick={editRepository}>
                <IonIcon icon={pencilOutline} slot="icon-only"/>
              </IonItemOption>
              <IonItemOption color="danger" onClick={confirmDelete}>
                <IonIcon icon={trashOutline} slot="icon-only"/>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonAlert 
          isOpen={showDeleteAlert}
          header="Eliminar repositorio"
          message={`¿Estás seguro de eliminar "${repository.name}"?`}
          onDidDismiss={() => setShowDeleteAlert(false)}
          buttons={[
            {
              text: "Cancelar",
              role: "cancel",
            },
            {
              text: "Eliminar",
              role: "destructive",
              handler: () => {
                deleteCurrentRepository();
              },
            },
          ]} />
    </>
    );
};

export default RepoItem;