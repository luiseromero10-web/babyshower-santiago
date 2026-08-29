import os
def w(p, c):
  os.makedirs(os.path.dirname(os.path.abspath(p)), exist_ok=True)
  open(p, 'w', encoding='utf-8').write(c.strip() + '\n')
  print('Wrote:', p)
