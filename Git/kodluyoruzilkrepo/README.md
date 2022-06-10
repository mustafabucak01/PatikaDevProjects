# Kodluyoruz Ilk Repo

Kodluyoruz Eğitimi kapsamında açtığım ilk repo
Bu repo [Kodluyoruz](https://www.kodluyoruz.org/) Front-End Eğitiminde oluşturduğumu ilk repo. İçerisinde bir adet README dosyası, bir adet de index.html barındırıyor.

![Create a new repository](https://github.com/mustafabucak01/PatikaDevProjects/blob/main/Git/kodluyoruzilkrepo/create_repo.jpg?raw=true)

## Installation

Öncelikle projeyi klonlayın.  [Git İndir](https://git-scm.com/downloads)
### 1. Yöntem: Tüm Repo'yu Klonlamak
```
git clone https://github.com/mustafabucak01/PatikaDevProjects.git
```

### 2. Yöntem: Sadece İlgili Projeyi Klonlamak

Projeyi klonlayacağız klasörde boş bir alanda sağ tıklayıp "Git Bash Here" seçeneğini tıklayın. Sonra aşağıdaki adımları uygulayın.

```
git clone --filter=blob:none --sparse https://github.com/mustafabucak01/PatikaDevProjects
cd PatikaDevProjects
git sparse-checkout add Git/kodluyoruzilkrepo
```

## Usage

Projeyi cloneladıktan sonra Visual Studio Code programında açınız.

Linux için:

```
cd kodluyoruzilkrepo
code .
```

## Contributing

Pull requestler kabul edilir. Büyük değişiklikler için, önce neyi değiştirmek istediğinizi tartışmak için bir konu açınız.

## License

[MIT](https://choosealicense.com/licenses/mit/)
