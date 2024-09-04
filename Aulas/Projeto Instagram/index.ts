import { v4 as randomUUID } from "uuid"
import { faker } from "@faker-js/faker"

class Post {
  private _id: string = randomUUID()
  private _userName: string;
  private _imageUrl: string;
  private _avatarUrl: string;
  private _description: string;
  private _isLiked: boolean = false;
  private _numberOfLikes: number = 0;
  private _createdAt: Date = new Date()

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    description: string
  ) {
    this._userName = userName;
    this._imageUrl = imageUrl;
    this._description = description;
    this._avatarUrl = avatarUrl;
  }
  public getUserName(): string {
    return this._userName;
  }

  public getLikes(): string {
    return String(this._numberOfLikes)
  }

  like() {
    this._isLiked = !this._isLiked

    if (this._isLiked == true) {
      this._numberOfLikes++
    } else {
      this._numberOfLikes--
    }
  }
}

const posts: Post[] = []
const firstPost = new Post(
  faker.person.firstName(),
  faker.image.avatarGitHub(),
  faker.image.urlPicsumPhotos(),
  faker.lorem.paragraph()
)

console.log("testando")
console.log(firstPost)

// Função para exibir o nome do usuário no HTML
function showUserName(): void {
  const userNameElement = document.getElementById('userName') as HTMLElement;
  if (userNameElement) {
      userNameElement.innerText = firstPost.getUserName();
  }
}

function showLikes(): void {
  const likesElement = document.getElementById('likes') as HTMLElement;
  likesElement.innerHTML = firstPost.getLikes()
}

// Chama a função diretamente ao carregar o script
showUserName();
showLikes();