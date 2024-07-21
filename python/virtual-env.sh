# Créez un environnement virtuel
python3 -m venv myenv

# Activez l'environnement virtuel
source myenv/bin/activate

pip install tk
pip install requests pillow

python3 -c "import tkinter as tk; print(tk.TkVersion)"

# Désactiver l'environnement virtuel après utilisation
deactivate
