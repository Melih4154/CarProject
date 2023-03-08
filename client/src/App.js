import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import DemageDetail from "./pages/DemageDetail.jsx"; 
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="/:demage_id" element={<DemageDetail />} />
            <Route path="dat-raporu/:demage_id" element={<DemageDetail />} />
            <Route path="sigorta-birimi/:demage_id" element={<DemageDetail />} />
            <Route path="tahkim-birimi/:demage_id" element={<DemageDetail />} />
            <Route path="eksper-birimi/:demage_id" element={<DemageDetail />} />
            <Route path="on-odeme-birimi/:demage_id" element={<DemageDetail />} />
            <Route path="odeme-birimi/:demage_id" element={<DemageDetail />} /> */}

            {/* <Route path='targets'>
              <Route index element={<Target />} />
              <Route path=':day' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route> */}
          </Route>
           
          <Route path='login' element={<Login />} />
          <Route path="detail/dosya-bilgileri/:demage_id" element={<DemageDetail />}/>
          <Route path="detail/dat-raporu/:demage_id" element={<DemageDetail/>}/>
          <Route path="detail/sigorta-birimi/:demage_id" element={<DemageDetail/>}/>
          <Route path="detail/tahkim-birimi/:demage_id" element={<DemageDetail />}/>
          <Route path="detail/eksper-birimi/:demage_id" element={<DemageDetail />}/>
          <Route path="detail/on-odeme-birimi/:demage_id" element={<DemageDetail />}/>
          <Route path="detail/odeme-birimi/:demage_id" element={<DemageDetail />}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
