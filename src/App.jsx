import { BrowserRouter } from "react-router";
import { Header } from "./components/header/header";
import { Titre } from "./components/ui/titre";
import { Text } from "./components/ui/text";
import { ImageProfil } from "./components/ui/imageProfil";
import { DownloadButton } from "./components/ui/downloadButton";
import { SliderPicto } from "./components/slider/sliderPicto";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <section
        key="hero"
        className="container mx-auto lg:grid lg:grid-cols-2 pb-[100px] px-4"
      >
        <div className="max-lg:text-center max-sm:px-4 flex flex-col max-lg:items-center gap-2 justify-between">
          <div>
            <Titre titre="Théo Zeisler" />
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin a eros id mi dignissim convallis. Praesent bibendum erat ullamcorper arcu accumsan interdum. 
              Vestibulum lorem nibh, elementum nec lacus a, porttitor pretium quam. Mauris ante orci, eleifend vitae ligula eget, placerat pulvinar nulla. 
              Ut a nunc in mi fermentum viverra. Aenean ultricies mauris ut gravida ultrices."
            />
          </div>
          <ImageProfil className="lg:hidden"></ImageProfil>
          <DownloadButton text="Télecharger mon CV"></DownloadButton>
        </div>
        <div className="max-lg:hidden flex justify-center">
          <ImageProfil />
        </div>
      </section>
      <SliderPicto />
    </BrowserRouter>
  );
}

export default App;
