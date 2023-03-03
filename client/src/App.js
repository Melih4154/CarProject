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
          <Route  path='login' element={<Login />} />
          <Route path="detail/dosya-bilgileri/:demage_id" element={<DemageDetail query={"dosya-bilgileri"}/>}/>
          <Route path="detail/dat-raporu/:demage_id" element={<DemageDetail  query={"dat-raporu"}/>}/>
          <Route path="detail/sigorta-birimi/:demage_id" element={<DemageDetail  query={"sigorta-birimi"}/>}/>
          <Route path="detail/tahkim-birimi/:demage_id" element={<DemageDetail  query={"tahkim-birimi"}/>}/>
          <Route path="detail/eksper-birimi/:demage_id" element={<DemageDetail  query={"eksper-birimi"}/>}/>
          <Route path="detail/on-odeme-birimi/:demage_id" element={<DemageDetail  query={"on-odeme-birimi"}/>}/>
          <Route path="detail/odeme-birimi/:demage_id" element={<DemageDetail  query={"odeme-birimi"}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
