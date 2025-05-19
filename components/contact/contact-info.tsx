import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Feel free to reach out to us using any of the contact methods below.
      </p>

      <div className="space-y-8">
        <div className="flex items-start group">
          <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-secondary/20 group-hover:scale-110">
            <MapPin className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 group-hover:text-secondary transition-colors duration-300">
              Our Location
            </h3>
            <p className="text-muted-foreground">
              Dembel, Haile Kebede Building, 3rd floor, office 302
              <br />
              Addis Ababa, Ethiopia
            </p>
          </div>
        </div>

        <div className="flex items-start group">
          <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-secondary/20 group-hover:scale-110">
            <Mail className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 group-hover:text-secondary transition-colors duration-300">
              Email Us
            </h3>
            <p className="text-muted-foreground">
              info@sydek.dev
              <br />
              contact@sydek.dev
            </p>
          </div>
        </div>

        <div className="flex items-start group">
          <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-secondary/20 group-hover:scale-110">
            <Phone className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 group-hover:text-secondary transition-colors duration-300">
              Call Us
            </h3>
            <p className="text-muted-foreground">
              +251 91 298 3759
              <br />
              +251 91 197 1885
              <br />
              +251 71 278 5587
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
