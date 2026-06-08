import React, { useState, useRef } from 'react';
import {
  UserCheck, CheckCircle, Clock, AlertCircle,
  Upload, X, Plus, MapPin, Calendar,
  BookOpen, DollarSign, LayoutGrid, Package, HelpCircle,
  ChevronLeft, Play, Image as ImageIcon, Video
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const HIGHLIGHTS = {
  'Recognition & Affiliation': [
    'UGC Recognized','Central University','State University','Deemed University',
    'Private University UGC Recognized','Affiliated to University',
    'Autonomous College','Constituent College','CBSE Affiliated',
    'CISCE (ICSE/ISC) Affiliated','State Board Affiliated','NIOS Affiliated',
    'IB School','Cambridge International'
  ],
  'Quality & Accreditation': [
    'NAAC A++','NAAC A+','NAAC A','NAAC B++','NAAC B+'
  ],
  'Professional & Regulatory Approvals': [
    'AICTE Approved','NMC Approved','DCI Approved','INC Approved',
    'PCI Approved','BCI Approved','CoA Approved','NCTE Approved'
  ],
  'Skill & Vocational Trust': [
    'NSDC Partner','NSQF Aligned','Skill India Partner',
    'Sector Skill Council Certified'
  ],
  'Operational Certifications': [
    'ISO 9001 Certified','ISO 21001 Certified','Government Registered Institution',
    'Registered Trust','Registered Society','Section 8 Company'
  ],
  'International Quality': [
    'AACSB Accredited','EQUIS Accredited','AMBA Accredited','ABET Accredited'
  ],
};

const verificationFields = [
  { label: 'Institute Name', value: 'ExcelR Solutions', verified: true },
  { label: 'Owner Name', value: 'Rajesh Kumar', verified: true },
  { label: 'Email', value: 'rajesh@excelr.com', verified: true },
  { label: 'Phone', value: '+91 98765 43210', verified: false },
  { label: 'GST Number', value: '27AABCE1234F1Z5', verified: true },
  { label: 'Address', value: 'Moti Nagar, New Delhi', verified: false },
];

const verificationDocs = [
  { name: 'Institute Registration Certificate', status: 'Verified' },
  { name: 'GST Certificate', status: 'Verified' },
  { name: 'Owner Aadhaar / PAN', status: 'Pending' },
  { name: 'Bank Account Proof', status: 'Pending' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const Label = ({ children, required }) => (
  <label style={{ display:'block', fontSize:11, fontWeight:700, letterSpacing:'0.08em',
    color:'#6b7280', marginBottom:6, textTransform:'uppercase' }}>
    {children}{required && <span style={{ color:'#10b981', marginLeft:2 }}>*</span>}
  </label>
);

const Input = ({ placeholder, value, onChange, style = {} }) => (
  <input
    placeholder={placeholder} value={value} onChange={onChange}
    style={{
      width:'100%', padding:'11px 14px', border:'1.5px solid #e5e7eb',
      borderRadius:10, fontSize:14, color:'#111827', outline:'none',
      background:'#fff', boxSizing:'border-box', transition:'border 0.2s',
      ...style
    }}
    onFocus={e => e.target.style.borderColor = '#10b981'}
    onBlur={e => e.target.style.borderColor = '#e5e7eb'}
  />
);

const Textarea = ({ placeholder, value, onChange, rows = 4 }) => (
  <textarea
    placeholder={placeholder} value={value} onChange={onChange} rows={rows}
    style={{
      width:'100%', padding:'11px 14px', border:'1.5px solid #e5e7eb',
      borderRadius:10, fontSize:14, color:'#111827', outline:'none',
      background:'#fff', boxSizing:'border-box', resize:'vertical',
      fontFamily:'inherit', transition:'border 0.2s'
    }}
    onFocus={e => e.target.style.borderColor = '#10b981'}
    onBlur={e => e.target.style.borderColor = '#e5e7eb'}
  />
);

const Card = ({ children, style = {} }) => (
  <div style={{
    background:'#fff', border:'1.5px solid #e5e7eb', borderRadius:16,
    padding:'28px 32px', marginBottom:20, ...style
  }}>
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <div style={{ marginBottom:20 }}>
    <h3 style={{ fontSize:16, fontWeight:700, color:'#111827', margin:0 }}>{children}</h3>
    <div style={{ height:2, background:'#f3f4f6', marginTop:10 }} />
  </div>
);

// ─── Image Upload Section ─────────────────────────────────────────────────────

const ImageUploadSection = ({ logo, setLogo, video, setVideo, photos, setPhotos }) => {
  const logoRef = useRef(); const videoRef = useRef(); const photoRef = useRef();

  const handleLogo = e => {
    const file = e.target.files[0];
    if (file) setLogo({ file, url: URL.createObjectURL(file) });
  };
  const handleVideo = e => {
    const file = e.target.files[0];
    if (file) setVideo({ file, url: URL.createObjectURL(file), name: file.name });
  };
  const handlePhotos = e => {
    const files = Array.from(e.target.files);
    const remaining = 15 - photos.length;
    const toAdd = files.slice(0, remaining).map(f => ({ file: f, url: URL.createObjectURL(f) }));
    setPhotos(prev => [...prev, ...toAdd]);
  };
  const removePhoto = idx => setPhotos(prev => prev.filter((_, i) => i !== idx));

  const UploadBox = ({ onClick, children, height = 120, style = {} }) => (
    <div onClick={onClick} style={{
      border:'2px dashed #d1fae5', borderRadius:12, height, display:'flex',
      flexDirection:'column', alignItems:'center', justifyContent:'center',
      cursor:'pointer', background:'#f0fdf4', transition:'all 0.2s', ...style
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor='#10b981'; e.currentTarget.style.background='#dcfce7'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor='#d1fae5'; e.currentTarget.style.background='#f0fdf4'; }}>
      {children}
    </div>
  );

  return (
  <Card>
  <SectionTitle>Media & Branding</SectionTitle>
  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:20, alignItems:"stretch" }}>
    {/* Logo */}
    <div>
      <Label required>Institute Logo</Label>
      <input ref={logoRef} type="file" accept="image/*" style={{ display:"none" }} onChange={handleLogo} />
      {logo ? (
        <div style={{ position:"relative", borderRadius:12, overflow:"hidden", height:220, border:"1.5px solid #e5e7eb", background:"#fff" }}>
          <img src={logo.url} alt="Logo" style={{ width:"100%", height:"100%", objectFit:"contain" }} />
          <button onClick={() => setLogo(null)} style={{ position:"absolute", top:8, right:8, background:"rgba(0,0,0,0.6)", border:"none", borderRadius:"50%", width:24, height:24, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff" }}>
            <X size={12} />
          </button>
        </div>
      ) : (
        <UploadBox onClick={() => logoRef.current.click()} height={220}>
          <ImageIcon size={32} color="#10b981" />
          <span style={{ fontSize:14, color:"#6b7280", marginTop:8 }}>Upload Logo</span>
        </UploadBox>
      )}
    </div>

    {/* Video */}
    <div>
      <Label>Intro Video <span style={{ color:"#9ca3af", fontWeight:400, textTransform:"none", whiteSpace:"nowrap" }}>(max 1 min)</span></Label>
      <input ref={videoRef} type="file" accept="video/*" style={{ display:"none" }} onChange={handleVideo} />
      {video ? (
        <div style={{ position:"relative", borderRadius:12, overflow:"hidden", height:220, border:"1.5px solid #e5e7eb", background:"#111" }}>
          <video src={video.url} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.3)" }}>
            <Play size={28} color="#fff" fill="#fff" />
          </div>
          <button onClick={() => setVideo(null)} style={{ position:"absolute", top:8, right:8, background:"rgba(0,0,0,0.6)", border:"none", borderRadius:"50%", width:24, height:24, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff" }}>
            <X size={12} />
          </button>
        </div>
      ) : (
        <UploadBox onClick={() => videoRef.current.click()} height={220}>
          <Video size={32} color="#10b981" />
          <span style={{ fontSize:14, color:"#6b7280", marginTop:8 }}>Upload Video</span>
        </UploadBox>
      )}
    </div>

    {/* Photos */}
    <div>
      <Label>Photos <span style={{ color:"#9ca3af", fontWeight:400, textTransform:"none" }}>(2–15 photos)</span></Label>
      <input ref={photoRef} type="file" accept="image/*" multiple style={{ display:"none" }} onChange={handlePhotos} />
      {photos.length === 0 ? (
        <UploadBox onClick={() => photoRef.current.click()} height={220}>
          <Plus size={32} color="#10b981" />
          <span style={{ fontSize:14, color:"#6b7280", marginTop:8 }}>Add Photos</span>
        </UploadBox>
      ) : (
        <div style={{ border:"1.5px solid #e5e7eb", borderRadius:12, padding:10, height:220, background:"#fff", overflowY:"auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(90px,1fr))", gap:8 }}>
            {photos.map((p, i) => (
              <div key={i} style={{ position:"relative", borderRadius:8, overflow:"hidden", height:90, border:"1px solid #e5e7eb" }}>
                <img src={p.url} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                <button onClick={() => removePhoto(i)} style={{ position:"absolute", top:4, right:4, background:"rgba(0,0,0,0.65)", border:"none", borderRadius:"50%", width:20, height:20, cursor:"pointer", color:"#fff" }}>
                  <X size={10} />
                </button>
              </div>
            ))}
            {photos.length < 15 && (
              <div onClick={() => photoRef.current.click()} style={{ height:90, border:"2px dashed #d1fae5", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", background:"#f0fdf4" }}>
                <Plus size={22} color="#10b981" />
              </div>
            )}
          </div>
        </div>
      )}
      <p style={{ fontSize:12, color:"#9ca3af", marginTop:8 }}>{photos.length}/15 photos added</p>
    </div>
  </div>
</Card>
  );
};

// ─── Highlights Section ───────────────────────────────────────────────────────

const HighlightsSection = ({ selected, setSelected, customInputs, setCustomInputs }) => {
  const toggle = (cat, item) => {
    setSelected(prev => {
      const set = new Set(prev[cat] || []);
      set.has(item) ? set.delete(item) : set.add(item);
      return { ...prev, [cat]: set };
    });
  };
  const addCustom = (cat, val) => {
    if (!val.trim()) return;
    toggle(cat, val.trim());
    setCustomInputs(prev => ({ ...prev, [cat]: '' }));
  };

  return (
    <Card>
      <SectionTitle>Highlights</SectionTitle>
      <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
        {Object.entries(HIGHLIGHTS).map(([cat, items]) => (
          <div key={cat}>
            <p style={{ fontSize:13, fontWeight:600, color:'#374151', marginBottom:10 }}>{cat}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:10 }}>
              {items.map(item => {
                const active = (selected[cat] || new Set()).has(item);
                return (
                  <button key={item} onClick={() => toggle(cat, item)} style={{
                    padding:'6px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer',
                    border: active ? '1.5px solid #10b981' : '1.5px solid #e5e7eb',
                    background: active ? '#ecfdf5' : '#f9fafb',
                    color: active ? '#065f46' : '#6b7280',
                    transition:'all 0.15s'
                  }}>
                    {active && <span style={{ marginRight:4 }}>✓</span>}{item}
                  </button>
                );
              })}
              {[...(selected[cat] || [])].filter(i => !items.includes(i)).map(item => (
                <button key={item} onClick={() => toggle(cat, item)} style={{
                  padding:'6px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer',
                  border:'1.5px solid #10b981', background:'#ecfdf5', color:'#065f46', transition:'all 0.15s'
                }}>✓ {item}</button>
              ))}
            </div>
            <div style={{ display:'flex', gap:8, maxWidth:360 }}>
              <input
                placeholder="Add custom..."
                value={customInputs[cat] || ''}
                onChange={e => setCustomInputs(prev => ({ ...prev, [cat]: e.target.value }))}
                onKeyDown={e => e.key === 'Enter' && addCustom(cat, customInputs[cat] || '')}
                style={{ flex:1, padding:'7px 12px', border:'1.5px solid #e5e7eb', borderRadius:8, fontSize:13, outline:'none', color:'#111827' }}
                onFocus={e => e.target.style.borderColor = '#10b981'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
              <button onClick={() => addCustom(cat, customInputs[cat] || '')} style={{
                padding:'7px 14px', background:'#10b981', color:'#fff', border:'none',
                borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, display:'flex', alignItems:'center', gap:4
              }}><Plus size={14} /> Add</button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ─── Locations Section ────────────────────────────────────────────────────────

const emptyLocation = () => ({ address1:'', address2:'', city:'', zip:'', state:'', country:'', mapLink:'' });

const LocationsSection = ({ locations, setLocations }) => {
  const update = (i, field, val) =>
    setLocations(prev => prev.map((l, idx) => idx === i ? { ...l, [field]: val } : l));
  const add = () => setLocations(prev => [...prev, emptyLocation()]);
  const remove = i => setLocations(prev => prev.filter((_, idx) => idx !== i));

  return (
    <Card>
      <SectionTitle>Locations</SectionTitle>
      {locations.map((loc, i) => (
        <div key={i} style={{ border:'1.5px solid #e5e7eb', borderRadius:12, padding:20, marginBottom:16, background:'#fafafa', position:'relative' }}>
          {locations.length > 1 && (
            <button onClick={() => remove(i)} style={{ position:'absolute', top:12, right:12, background:'#fee2e2', border:'none', borderRadius:6, padding:'4px 8px', cursor:'pointer', color:'#ef4444', fontSize:12 }}>Remove</button>
          )}
          <p style={{ fontSize:13, fontWeight:600, color:'#374151', marginBottom:14 }}>
            <MapPin size={14} style={{ marginRight:4, verticalAlign:'middle' }} />Location {i + 1}
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
            {[['address1','Address Line 1'],['address2','Address Line 2'],['city','City'],['zip','Zip Code'],['state','State'],['country','Country']].map(([f, lbl]) => (
              <div key={f}>
                <Label>{lbl}</Label>
                <Input value={loc[f]} onChange={e => update(i, f, e.target.value)} placeholder={lbl} />
              </div>
            ))}
            <div style={{ gridColumn:'span 2' }}>
              <Label>Google Map Link</Label>
              <Input value={loc.mapLink} onChange={e => update(i, 'mapLink', e.target.value)} placeholder="https://maps.google.com/..." />
            </div>
          </div>
        </div>
      ))}
      <button onClick={add} style={{ display:'flex', alignItems:'center', gap:6, padding:'9px 18px', border:'1.5px dashed #10b981', borderRadius:10, background:'#f0fdf4', color:'#10b981', cursor:'pointer', fontWeight:600, fontSize:13 }}>
        <Plus size={16} /> Add More Locations
      </button>
    </Card>
  );
};

// ─── Profile Verification ─────────────────────────────────────────────────────

const ProfileVerification = () => (
  <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
    <Card style={{ borderLeft:'4px solid #10b981' }}>
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
        <UserCheck size={22} color="#10b981" />
        <h3 style={{ margin:0, fontSize:16, fontWeight:700 }}>Profile Verification Status</h3>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {verificationFields.map((f, i) => (
          <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 14px', borderRadius:10, background:'#f9fafb', border:'1px solid #f3f4f6' }}>
            <div>
              <p style={{ margin:0, fontSize:11, color:'#9ca3af', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em' }}>{f.label}</p>
              <p style={{ margin:'2px 0 0', fontSize:13, color:'#111827', fontWeight:500 }}>{f.value}</p>
            </div>
            {f.verified ? <CheckCircle size={18} color="#10b981" /> : <Clock size={18} color="#f59e0b" />}
          </div>
        ))}
      </div>
    </Card>

    <Card>
      <h3 style={{ margin:'0 0 16px', fontSize:16, fontWeight:700 }}>Document Verification</h3>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {verificationDocs.map((d, i) => (
          <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 16px', borderRadius:10, border:'1px solid #f3f4f6', background:'#f9fafb' }}>
            <span style={{ fontSize:14, color:'#374151' }}>{d.name}</span>
            <span style={{ fontSize:12, fontWeight:600, padding:'4px 12px', borderRadius:20, background: d.status === 'Verified' ? '#dcfce7' : '#fef9c3', color: d.status === 'Verified' ? '#065f46' : '#92400e', display:'flex', alignItems:'center', gap:4 }}>
              {d.status === 'Verified' ? <><CheckCircle size={12} /> Verified</> : <><AlertCircle size={12} /> Pending</>}
            </span>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function InstituteProfileForm() {
  const [activeTab, setActiveTab] = useState('basic');
  const [logo, setLogo] = useState(null);
  const [video, setVideo] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [form, setForm] = useState({ name: '', tagline: '', description: '', establishDate: '' });
  const [highlights, setHighlights] = useState({});
  const [customInputs, setCustomInputs] = useState({});
  const [locations, setLocations] = useState([emptyLocation()]);

  const setField = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  return (
    // ✅ Sirf #fff (white) background — grey hata diya
    <div style={{ minHeight:'100vh', fontFamily:'system-ui, sans-serif' }}>

        {/* Heading */}
        <div style={{ marginBottom:28 }}>
          <h1 style={{ fontSize:32, fontWeight:800, color:'#111827', margin:0 }}>
            Create a <span style={{ color:'#10b981' }}>New Course</span>
          </h1>
          <p style={{ color:'#9ca3af', margin:'8px 0 0', fontSize:14 }}>
            Fill in the details below to publish your course listing.
          </p>
        </div>

        {activeTab === 'basic' && (
          <div>
            <ImageUploadSection logo={logo} setLogo={setLogo} video={video} setVideo={setVideo} photos={photos} setPhotos={setPhotos} />

            <Card>
              <SectionTitle>Course Identity</SectionTitle>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:20 }}>
                <div>
                  <Label required>Institute Name</Label>
                  <Input placeholder="e.g. ExcelR Solutions" value={form.name} onChange={setField('name')} />
                </div>
                <div>
                  <Label>Tagline</Label>
                  <Input placeholder="e.g. Empowering future leaders" value={form.tagline} onChange={setField('tagline')} />
                </div>
              </div>
              <div style={{ marginBottom:20 }}>
                <Label>Description</Label>
                <Textarea placeholder="Describe what this institute is about..." value={form.description} onChange={setField('description')} rows={5} />
              </div>
              <div style={{ maxWidth:260 }}>
                <Label>Establish Date</Label>
                <input type="date" value={form.establishDate} onChange={setField('establishDate')} style={{ width:'100%', padding:'11px 14px', border:'1.5px solid #e5e7eb', borderRadius:10, fontSize:14, color:'#111827', outline:'none', background:'#fff', boxSizing:'border-box' }}
                  onFocus={e => e.target.style.borderColor='#10b981'}
                  onBlur={e => e.target.style.borderColor='#e5e7eb'} />
              </div>
            </Card>

            <HighlightsSection selected={highlights} setSelected={setHighlights} customInputs={customInputs} setCustomInputs={setCustomInputs} />
            <LocationsSection locations={locations} setLocations={setLocations} />
            <ProfileVerification />

            <div style={{ display:'flex', justifyContent:'flex-end', gap:12, marginTop:8 }}>
              <button style={{ padding:'12px 28px', borderRadius:10, border:'1.5px solid #e5e7eb', background:'#fff', color:'#374151', fontWeight:600, cursor:'pointer', fontSize:14 }}>Save Draft</button>
              <button style={{ padding:'12px 32px', borderRadius:10, border:'none', background:'#10b981', color:'#fff', fontWeight:700, cursor:'pointer', fontSize:14, boxShadow:'0 4px 14px rgba(16,185,129,0.35)' }}>Publish Course →</button>
            </div>
          </div>
        )}
      </div>
   
  );
}