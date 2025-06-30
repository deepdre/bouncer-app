import React, { useState } from 'react';
import { Upload, X, Plus, Camera } from 'lucide-react';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: 1,
      url: img1,
      title: 'Concert Security',
      description: 'Professional security at major music event',
    },
    {
      id: 2,
      url: img2,
      title: 'VIP Protection',
      description: 'Close protection services for high-profile client',
    },
    {
      id: 3,
      url: img3,
      title: 'Event Management',
      description: 'Crowd control at corporate event',
    },
    {
      id: 4,
      url: img4,
      title: 'Training Session',
      description: 'Professional security training in progress',
    },
    {
      id: 5,
      url: img5,
      title: 'Special Event',
      description: 'Security for special VIP event',
    },
    {
      id: 6,
      url: img6,
      title: 'Nightlife Security',
      description: 'Bouncer services at nightlife venue',
    },
    {
      id: 7,
      url: img7,
      title: 'Corporate Security',
      description: 'Business event security team',
    },
  ]);
  
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showUpload, setShowUpload] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          const newImage: GalleryImage = {
            id: Date.now() + Math.random(),
            url: result,
            title: file.name.split('.')[0],
            description: 'Newly uploaded image',
          };
          setImages(prev => [newImage, ...prev]);
          setShowUpload(false);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black-900 via-black-800 to-black-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Security <span className="text-gold-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Highlights from our security operations, training sessions, and professional events.
          </p>
          <button
            onClick={() => setShowUpload(true)}
            className="bg-gold-500 hover:bg-gold-600 text-black-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <Upload className="h-5 w-5" />
            <span>Upload Images</span>
          </button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Our Work <span className="text-gold-500">In Action</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional security services captured in real-world scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-black-900 rounded-xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-gold-500/10 backdrop-blur-sm rounded-lg p-3 border border-gold-500/20">
                      <h3 className="font-semibold text-white mb-1">{image.title}</h3>
                      <p className="text-gold-500 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-black-900 mb-4">
              Gallery Statistics
            </h2>
            <p className="text-xl text-black-800 max-w-3xl mx-auto">
              Our visual documentation of professional security services.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-black-900">
            {[
              { number: `${images.length}+`, label: 'Photos' },
              { number: '100+', label: 'Events Documented' },
              { number: '50+', label: 'Team Members' },
              { number: '5+', label: 'Years Archive' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-display font-bold text-4xl lg:text-6xl mb-2">{stat.number}</div>
                <div className="font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-black-800 border border-gold-500/20 rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold text-2xl text-white">Upload Images</h3>
              <button
                onClick={() => setShowUpload(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="border-2 border-dashed border-gold-500/40 rounded-xl p-8 text-center hover:border-gold-500/60 transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Camera className="h-16 w-16 text-gold-500 mx-auto mb-4" />
                <p className="text-white font-semibold mb-2">Click to upload images</p>
                <p className="text-gray-400 text-sm">Support JPG, PNG, WebP files</p>
              </label>
            </div>
            
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowUpload(false)}
                className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black-900/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="max-w-4xl max-h-screen p-4">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold-500 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <div className="bg-black-800/90 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 mt-4">
                <h3 className="font-display font-bold text-2xl text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gold-500">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;