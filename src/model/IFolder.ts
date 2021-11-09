
export interface IFolder {
  name: string;
  id: string;
  driveID: string;
  parentFolder: IFolder;
  webUrl: string;
}

export interface IMessage {
  subject: string;
  id: string;
  body: string;
}